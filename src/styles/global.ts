import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;  
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body > #root > div {
    width: 100%;
    height: 100vh !important;
  }
  
  h1,h2,h3,h4,h5,h6{
	  display:inline;
  }
  
  a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
  }

ul {
    list-style-type: none;
}

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`
