import styled from 'styled-components';

function Bottom({ title, posterURL, session }) {

    
    return (
        <StyledBottom >
            <div><img src={posterURL} alt={title} /></div>
            <div>
            <p>{title} </p>
            <p>{session? session: ""}</p> 
            </div>
            
            
           

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
    justify-content: flex-start !important;
     
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        justify-items:center;
        /* background: #FFFFFF; */
        border-radius: 3px;
        width: auto;
        height: 72px;
        padding: 8px;
        margin: 8px;
     
    }

    img{
        width: 52px;
        height: 74px;
        background-color: #FFFFFF;
        padding:6px;
    }

    p{
        margin:0 !important;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px !important;
        line-height: 30px;
        display: flex !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
        color: #293845;
        

    }
`;