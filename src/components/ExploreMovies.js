import axios from 'axios';
import { useState, useEffect } from 'react'; //hook
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const movies = "https://mock-api.driven.com.br/api/v7/cineflex/movies";


function Poster({ idMovie, title, posterURL }) {

    return (
        <PosterStyle>
            <img src={posterURL} alt={title ? title : ""} />
        </PosterStyle>
    );


}


const PosterStyle = styled.div`

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    width: 145px;
    height: 209px;
    padding: 8px;
    margin: 8px;
   

    img{
        width: 100%;
        height: 100%;
    }
`;



function ExploreMovies() {

    const [posters, setPosters] = useState([]);


    useEffect(() =>{

        const promise = axios.get(movies);

        promise.then(
            (res) =>{
                // console.log(res.data);
                setPosters(res.data);
            }
        );


    },[]);



    return (

        <Posters>
            <p>Selecione o filme</p>
            <div>
                {posters.map(
                    (poster) => <Poster posterURL={poster.posterURL} title={poster.title} />
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
        letter-spacing: 0.04em;
        color: #293845;
        display:flex;
        justify-content: center;
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