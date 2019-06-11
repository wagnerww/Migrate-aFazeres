import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    outline:none;
  }

  html{
    font-size:16px;
  }

  body{
    text-rendering:optimizeLegibility !important;
    --webkit-font-smoothing:antialised !important;
    font-family: 'Roboto', sans-serif;  
    font-size:1em;
    background:${Colors.background.fundo};
    color:${Colors.fonts.label};
    line-height:1.5;

    & * a{
      text-decoration:none;
      color:${Colors.fonts.label};
      cursor:pointer;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`;

export default GlobalStyle;
