import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
    font-style: normal;

    @media (max-width: 320px) {
        max-width: 320px;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
}

`

export default Global;