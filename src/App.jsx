import React from "react";
import "./index.css";
import "./assets/css/nav.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MainBody from "./components/MainBody";
import { ThemeProvider } from "styled-components";

const css_properties = {
	borderColor: "hotpink",
	transition: "280ms ease-in-out",
};

function App() {
	return (
		<ThemeProvider theme={css_properties}>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<MainBody />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
