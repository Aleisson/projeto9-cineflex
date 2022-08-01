import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Horario({ weekday, date, showtimes }) {


    return (
        <StyledHorario>
            <span>{weekday} - {date}</span>
            {showtimes ? showtimes.map(x => <div>{x.name}</div>) : "Sem Horario"}
        </StyledHorario>
    );


}

export default Horario;

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