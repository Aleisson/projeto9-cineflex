
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function Sucesso({ title, dataHora, assentos, nome, cpf }) {

    let navigate = useNavigate();


    return (
        <StlyedSucesso>
            <h1>Pedido feito<br />
                com sucesso!</h1>
            <div>
                <h2>Filme e sessão</h2>
                <p>{title}</p>
                <p>{dataHora}</p>
            </div>
            <div>
                <h2>Ingresso</h2>
                {assentos.map(x => <p>{`Assento ${x}`}</p>)}


            </div>
            <div>
                <h2>Comprador</h2>
                <p>{nome}</p>
                <p>{cpf}</p>
            </div>
            <button onClick={() => navigate("/")}>
                <p>Voltar pra Home</p>
            </button>

        </StlyedSucesso>
    );

}

export default Sucesso;

const StlyedSucesso = styled.div`

    width:100%;
    height: auto;
    display:flex;
    margin-top: 130px;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }

    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }

    div{
        
        width:100%;
        height: auto;
        margin: 20px;
        padding-left: 40px;
    }

    button{
        width: 225px !important;
        height: 42px !important;
        background: #E8833A;
        border-radius: 3px;
        border:none;
        display: flex !important;
        align-items: center !important; 
        text-align: center !important;
        justify-content:center;
        margin-top: 36px;
    }

     button > p{
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        text-align:center !important;
        align-items: center !important;
        text-align: center !important;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
`;