import styled from 'styled-components'


const StyledContainer = styled.div`
    width: 555px;
    height: 700px;
    @media (max-width: 320px) {
        width: 320px;
        height: 200px;
    }
`

const StyledPriceContainer = styled.div`
    position: absolute;
    width: 555px;
    height: 136px;
    background: #000000;
    opacity: 0.8;
    z-index: 10;
    top: 564px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    
    p {
        z-index: 20;
        color: white;
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 46px;
        font-feature-settings: 'tnum' on, 'lnum' on;
        margin-left: 5%;
        margin-right: 5%;

        color: #FFFFFF;
    }
`

export {
    StyledContainer,
    StyledPriceContainer
}  