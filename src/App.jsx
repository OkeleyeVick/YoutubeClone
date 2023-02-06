import React from "react";
import "./index.css";
import "./assets/css/nav.css";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

//* components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainBody from "./components/MainBody";

const css_properties = {
	borderColor: "hotpink",
	transition: "280ms ease-in-out",
	smShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
	smRadius: "6px",
	mdRadius: "10px",
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
			<Navbar />
			<div className="sideBar_main_container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<MainBody />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
