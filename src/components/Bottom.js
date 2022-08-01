import styled from 'styled-components';

function Bottom({ title, posterURL, session }) {

    
    return (
        <StyledBottom >
            <div><img src={posterURL} alt={title} /></div>
            
            <p>{title} <br />{session? session: ""}</p>
            
           

        </StyledBottom>
    );
}

export default Bottom;

const StyledBottom = styled.div`

    position: fixed;
    width: 100%;
    height: 118px;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
     
    div{
        background: #FFFFFF;
        border-radius: 3px;
        width: 48px;
        height: 72px;
        padding: 8px;
        margin: 8px;
     
    }

    img{
        width: 48px;
        height: 72px; 
    }

    && p{
       
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        display: flex;
        align-items: center;
        justify-content: start;
        color: #293845;
        

    }
`;