import React from "react";
import "./index.css";
import "./assets/css/nav.css";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

//* components
import Sidebar from "./components/Sidebar";
import MainBody from "./components/MainBody";
import ShortsPage from "./components/ShortsPage";
import Librarypage from "./components/LibraryPage";

const css_properties = {
	borderColor: "hotpink",
	transition: "280ms ease-in-out",
	smShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
	smRadius: "6px",
	mdRadius: "10px",
	gray: "#e5e5e5",
	"text-clr": "#0f0f0f",
};

const GlobalStyles = createGlobalStyle`
	body{
		margin: 0;
	}
	:is(h1, h2, h3, h4, h5, h6){
		font-weight: 500;
	}
	:is(ul, li){
		list-style: none;
		list-style-type: none;
	}
	a{
		text-decoration: none
	}
`;

function App() {
	return (
		<ThemeProvider theme={css_properties}>
			<GlobalStyles />
			<Sidebar />
			<MainBody />
		</ThemeProvider>
	);
}

export default App;
