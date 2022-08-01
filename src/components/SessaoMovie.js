import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function SessaoMovie() {

    const { idSessao } = useParams();
    const [sessao, setSessao] = useState({});

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then(
            (res) => {
                // console.log(res.data);
                setSessao(res.data);
            }
        );


    }, []);




    return (
        <StyledSessao>
            <p>Selecione o(s) assento(s)</p>
            {sessao.seats ?
                <StyleAssentos>
                    <div>{sessao.seats.map((assento) => <Lugares name={assento.name} />)}</div>
                    <Display>
                        <Lugares />
                        <Lugares />
                        <Lugares />
                    </Display>
                    <form>
                        <label for="campoNome">Nome do Comprador:</label><br />
                        <input type="text" id="campoNome" /><br />
                        <label for="campoCPF">CPF do Comprador:</label> <br />
                        <input type="text" id="campoCPF" /><br />
                    </form>

                </StyleAssentos>
                : <h1>Carregando...</h1>}

        </StyledSessao>

    );

}

export default SessaoMovie;


const StyledSessao = styled.div`

    width: 100%;
    height: auto; 
    margin-top:100px;
    margin-bottom: 110px;
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
    }

    input{
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
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


function Lugares({ id, name, isAvaible }) {
    return (
        <StyleLugares>
            <p>{name}</p>
        </StyleLugares>
    );
}

const StyleLugares = styled.div`
    width: 26px;
    height: 26px;
    background: #C3CFD9;
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
    background-color: red;
`