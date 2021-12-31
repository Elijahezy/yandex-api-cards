import styled from "styled-components";

const MainLayout = styled.div`
    width: 1110px;
    max-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .items {
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
        padding-bottom: 25px;
        margin-top: 25px;
    }

    h1 {
        font-size: 40px;
    }

    h3 {
        margin-top: 15px;
        margin-bottom: 30px;
        font-size: 16px;
    }

    a {
        color: ${({ theme }) => theme.colors.grey2}
    }

    h2 {
        font-size: 28px;
        margin-top: 70px;
        margin-bottom: 5px;
    }

    .button_buy {
        width: 100%;
        background-color: white;
        font-size: 20px;
        font-weight: bold;
        padding: 24px 0px 23px 0px;
        margin-bottom: 50px;
    }

    @media (max-width: 320px) {
        margin: 0px 16px 0px 16px;

        h2 {
            font-size: 26px;
            margin-top: 70px;
            margin-bottom: 5px;
            margin-top: 40px;
        }
    }

`



const ContactsContainer = styled.div`
    * {
        outline: none;
        color: ${({ theme }) => theme.colors.grey1};
        border-color: ${({ theme }) => theme.colors.grey2};
        font-size: 16px;
        width: 100%;
        margin-bottom: 20px;

    }
    
    width: 100%;

    & label {
        font-size: 12px;
        display: inline-block;
        margin-bottom: 0px;
    }

    #phone {
        margin-left: 10%;
        width: 50%;
        margin-bottom: 0px;
    }

    #name {
        margin-bottom: 0px;
    }
    

    @media (max-width: 320px) {
        * {
            padding: 18px 0px 9px 0px;
            margin-bottom: 16px;
        }

        #name {
            width: 100%;
            margin-top: 24px;
            margin-bottom: 16px;
        }

        #phone {
            width: 100%;
            margin-left: 0%;
            margin-bottom: 16px;
        }
    }

`

const ContactsInput = styled.input`
    border: 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
    width: ${(props) => props.width || '100%'};
    padding: 18px 0px 9px 0px;

`

const ContactsSelect = styled.select`
    padding: 18px 0px 9px 0px;

`
const ContainerFlexRows = styled.div`
    display: flex;
    flex-direction: row;
    
    .img {
        width: 150px;
        height: 150px;
        background-color: teal;
    }

    .items-info {
        justify-content: space-between;
        width: 180px;
        padding-left: 20px;

        h4 {
            font-size: 20px;
        }

        p {
            color: ${({ theme }) => theme.colors.grey1}
        }
    }

    .items-price {
        justify-content: space-between;
        align-items: flex-end;

        h4 {
            font-size: 20px;
        }

        button {
            font-size: 20px;
            border: 0px;
            background-color: white;
            border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};
            color: ${({ theme }) => theme.colors.grey1};
            font-size: 14px;
        }
    }
`

const ContainerFlexColumns = styled.div`
    display: flex;
    flex-direction: column;

`

const ButtonFlex = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #000000;
    width: 114px;
    height: 40px;
    font-size: 20px;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;

    button {
        border: 0px;
        font-size: 20px;
        background-color: white;
    }
    


`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 26px;
    font-weight: bold;
    margin-top: 24px;
    margin-bottom: 24px;
`


export {
    MainLayout,
    ContactsContainer,
    ContactsInput,
    ContainerFlexColumns,
    ContactsSelect,
    ContainerFlexRows,
    ButtonFlex,
    PriceContainer
}