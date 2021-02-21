import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
	}

	html {
		height:100%;
	}

    body {
    	box-sizing: border-box;
		font-family: 'Noto Sans KR', sans-serif;
		background-color: black;
		color:white;
	}
`;

export default GlobalStyle;
