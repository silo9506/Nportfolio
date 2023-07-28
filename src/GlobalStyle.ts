import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* background-color: ${(props) => props.theme.colors.bg}; */
        background-color: #111111;  
        color:${(props) => props.theme.colors.text}
    }

    a{
        color:inherit;
        text-decoration: none;
    }
`;
