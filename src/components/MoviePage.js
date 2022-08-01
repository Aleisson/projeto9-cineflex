import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Horario from './Horario';
import Bottom from './Bottom';


function MoviePage() {


    const [horarios, setHorarios] = useState({})

    const { idMovie } = useParams();




    // console.log("ID Movie " + idMovie);

    useEffect(() => {

        // alert(urlMovies + `/${idMovie}/showtimes`)

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`);

        promise.then(
            (res) => {
                // console.log(res.data);
                setHorarios(res.data);
            }
        );


    },[]);


    return (
        <Movie>
            <p>Selecione o horário</p>
            <Horarios>

                {horarios.days ?
                    horarios.days.map((day) =>
                        <Horario weekday={day.weekday} date={day.date} showtimes={day.showtimes} />) : <h1>Carregando...</h1>}
            </Horarios>
            {horarios.days ? <Bottom title={horarios.title} posterURL={horarios.posterURL}/> : <h1>Carregando...</h1>}
        </ Movie>
    );

}

export default MoviePage;

const Movie = styled.div`

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


const Horarios = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-around;

  
`





