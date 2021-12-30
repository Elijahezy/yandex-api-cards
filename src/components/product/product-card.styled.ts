import styled from "styled-components"

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

export {
    ContainerFlexColumns,
    ContainerFlexRows,
    ButtonFlex
}