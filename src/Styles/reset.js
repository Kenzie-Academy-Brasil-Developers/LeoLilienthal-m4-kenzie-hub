import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`

    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    button{
        background:transparent;
        cursor:pointer;
        border:none;
    }

    a{
        text-decoration:none;
        color:unset;
    }

    ul,ol{
        list-style:none;
    }

    input{
        border-radius:0;
        border:none;
        background:transparent;
    }

    img{
        max-width:100%;
    }
`;
