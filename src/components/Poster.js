import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Poster({ idMovie, title, posterURL }) {

    return (
        <Link to = {idMovie?`/filme/${idMovie}`:""}>
            <PosterStyle>
                <img src={posterURL} alt={title ? title : ""} />
            </PosterStyle>
        </Link>

    );


}

export default Poster;

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
