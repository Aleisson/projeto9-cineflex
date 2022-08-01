import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function SessaoMovie() {

    const{idSessao} = useParams();
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
            <StyleAssentos>

            </StyleAssentos>
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

const StyleAssentos = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;