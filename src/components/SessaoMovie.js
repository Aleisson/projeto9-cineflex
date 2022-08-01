import styled from "styled-components";

function SessaoMovie() {


    return (
        <StyledSessao>
            <p>Selecione o(s) assento(s)</p>
            <Assentos>

            </Assentos>
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

`;

const Assentos = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;