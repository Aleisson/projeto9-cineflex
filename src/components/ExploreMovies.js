import axios from 'axios';
import { useState, useEffect } from 'react'; //hook
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Poster from './Poster';

const urlMovies = "https://mock-api.driven.com.br/api/v7/cineflex/movies";


function ExploreMovies() {

    const [posters, setPosters] = useState([]);


    useEffect(() => {

        const promise = axios.get(urlMovies);

        promise.then(
            (res) => {
                // console.log(res.data);
                setPosters(res.data);
            }
        );


    }, []);



    return (

        <Posters>
            <p>Selecione o filme</p>
            <div>
                {posters.map(
                    (poster) => <Poster idMovie={poster.id} posterURL={poster.posterURL} title={poster.title} />
                )}
            </div>
        </Posters>
    );
}

const Posters = styled.div`

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
        height: 110px;
    }

    div{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-around;
    }

`;

export default ExploreMovies;