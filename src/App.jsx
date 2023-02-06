import React from "react";
import "./index.css";
import "./assets/css/nav.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MainBody from "./components/MainBody";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const css_properties = {
	borderColor: "hotpink",
	transition: "280ms ease-in-out",
	smShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
	smRadius: "6px",
	mdRadius: "10px",
};

const GlobalStyles = createGlobalStyle`
	margin: 0;
`;

function App() {
	return (
		<ThemeProvider theme={css_properties}>
			<div>
				<GlobalStyles />
				<Navbar />
				<Routes>
					<Route path="/" element={<MainBody />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
