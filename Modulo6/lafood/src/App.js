import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Router from './Routes/Router';
import GlobalState from './Global/GlobalState';
import theme from "./Constants/theme.js"
import { GlobalStyle } from './Styles/Styled';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<GlobalState>
				<Router /> 
			</GlobalState>
		</ThemeProvider>
	);
}
