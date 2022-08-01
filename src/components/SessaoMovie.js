import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Bottom from "./Bottom";


function SessaoMovie({ popIngresso }) {



    const { idSessao } = useParams();
    const [sessao, setSessao] = useState({});
    const [ids, setIds] = useState([]);
    const [numCadeira, setNumCadeira] = useState([])
    const [nome, setNome] = useState("");
    const [CPF, setCPF] = useState("");
    const [post, setPost] = useState({});
    let navigate = useNavigate();

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then(
            (res) => {
                // console.log(res.data);
                setSessao(res.data);
            }
        );


    }, []);


    function addCadeiras(id,name) {
        setIds([...ids, id]);
        setNumCadeira([...numCadeira,name])
    }

    function removeCadeiras(id,name) {
        setIds(ids.filter(x => x !== id));
        setNumCadeira(numCadeira.filter(x => x !== name))
    }


    function postSeat() {

        // console.log(`{ids: ${ids}, name: ${nome}, cpf: ${CPF}}`)

        const post = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", { ids: ids, name: nome, cpf: CPF });

        
        
        popIngresso(sessao.movie.title,`${sessao.day.weekday} - ${sessao.day.date}`, numCadeira, ids, nome, CPF);


        
        setPost()
        setIds([]);
        setNome("");
        setCPF("");

        post.then(x => console.log(x.status));
       
        navigate("/sucesso")

    }

     console.log("IDS: " + ids);
     console.log("NumCadeira: " + numCadeira);
    // console.log("Nome: " + nome);
    // console.log("CPF: " + CPF);

    return (

        <StyledSessao>
            <p>Selecione o(s) assento(s)</p>
            {sessao.seats ?
                <StyleAssentos>
                    <div>{sessao.seats.map((assento) => <Lugares idAssento={assento.id} name={assento.name} isAvailable={assento.isAvailable} addIds={addCadeiras} removeIds={removeCadeiras} />)}</div>
                    <Display>
                        <div>
                            <BolinhaVerde />
                            <p>Seleionado</p>
                        </div>
                        <div>
                            <Lugares isAvailable={true} />
                            <p>Disponivel</p>
                        </div>
                        <div>
                            <BolinhaAmarela />
                            <p>Indisponível</p>
                        </div>

                    </Display>
                    <form>
                        <label for="campoNome">Nome do Comprador:</label><br />
                        <input placeholder='Digite seu nome...' type="text" id="campoNome" value={nome} onChange={e => setNome(e.target.value)} /><br />
                        <label for="campoCPF">CPF do Comprador:</label> <br />
                        <input placeholder='Digite seu CPF...' type="text" id="campoCPF" value={CPF} onChange={e => setCPF(e.target.value)} /><br />
                    </form>

                    <Button onClick={() => postSeat()} >
                        <p>Reservar assento(s)</p>
                    </Button>


                </StyleAssentos>
                : <h1>Carregando...</h1>}
            {sessao.seats ? <Bottom title={sessao.movie.title} posterURL={sessao.movie.posterURL}
                session={`${sessao.day.weekday} - ${sessao.day.date}`} /> : <h1>Carregando...</h1>}
        </StyledSessao>

    );

}

export default SessaoMovie;


const StyledSessao = styled.div`

    width: 100%;
    height: auto; 
    margin-top:100px;
    margin-bottom: 160px;
    padding: 10px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    
    
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        letter-spacing: 0.04em;
        color: #293845;
        width: 100%;
        height: 80px;
    }

    && div{
        display: flex;
        justify-content: center;
        align-items: center;
    }


    label{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        margin-top: 10px;
    }

    input{
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    input::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }

`;

const StyleAssentos = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-around;

    && > div{
        width: 300px;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
       
        
    }
`;


function Lugares({ index, idAssento, name, isAvailable, addIds, removeIds }) {

    const [cor, setCor] = useState("");

    function seleciona(isAvailable) {

        if (!isAvailable) {
            alert("Esse assento não está disponível")
        } else if (cor === "#8DD7CF") {
            setCor("#C3CFD9");
            removeIds(idAssento,name);
        } else {
            setCor("#8DD7CF")
            addIds(idAssento,name);
        }


    }

    return (
        <StyleLugares corStyle={!cor ? isAvailable ? "#C3CFD9" : "#FBE192" : cor}>
            <p onClick={() => seleciona(isAvailable)}>{name}</p>
        </StyleLugares>
    );
}

const StyleLugares = styled.div`
    width: 26px;
    height: 26px;
    background: ${props => props.corStyle};
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    justify-items: center;
    align-items:center;

    && p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #000000;
        
    }

`;

const Display = styled.div`

    width:100%;
    height:100px !important; 
    display:flex;
    justify-content: center !important;
    align-items: center !important;

    && > div{
   
        display:flex;
        flex-direction: column;
      
        width:100px;
        height: 80px;
    }

    && p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
        height: auto;

    }
`

const BolinhaVerde = styled.div`

    width: 25px;
    height: 25px;
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    border-radius: 17px;

`

const BolinhaAmarela = styled.div`

    width: 24px;
    height: 24px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;

`;

const Button = styled.div`

    width: 225px !important;
    height: 42px !important;
    background: #E8833A;
    border-radius: 3px;
    margin-top: 68px;
    display: flex !important;
    justify-content: center !important;
    align-items: start !important;
    padding-bottom: 15px !important;
   
    

    p{
        width: auto;
        height: auto;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        
    }

`