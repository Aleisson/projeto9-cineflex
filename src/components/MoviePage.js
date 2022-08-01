import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function Horario({ weekday, date, showtimes }) {


    return (
        <StyledHorario>
            <span>{weekday} - {date}</span>
            {showtimes ? showtimes.map(x => <div>{x.name}</div>) : "Sem Horario"}
        </StyledHorario>
    );


}


function MoviePage() {
 
   
    const [horarios, setHorarios] =  useState({})

    const { idMovie } = useParams();


    

    // console.log("ID Movie " + idMovie);

    useEffect(() => {
       
        // alert(urlMovies + `/${idMovie}/showtimes`)

        const promise = axios.get( `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`);

        promise.then(
            (res) => {
                // console.log(res.data);
                setHorarios(res.data);
            }
        );


    });



    return (
        <Movie>
            <p>Selecione o horário</p>
            <Horarios>

            {horarios.days? horarios.days.map((day) => <Horario weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>):<h1>Carregando...</h1>}
                
            </Horarios>
        </ Movie>
    );

}

export default MoviePage;

const Movie = styled.div`

    width: 100%;
    height: auto; 
    margin-top:100px;
    margin-bottom: 100px;

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





const StyledHorario = styled.div`

    display:flex;
    flex-wrap: wrap;

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: start;
        justify-content: start;
        letter-spacing: 0.04em;
        color: #293845;
        width:100%;
        margin-left: 10px;
    }

    div{
        width: 88px;
        height: 46px;
        background: #E8833A;
        border-radius: 3px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content:center;
        letter-spacing: 0.02em;
        margin: 28px 12px 28px 6px;
        color: #FFFFFF;
    }

`