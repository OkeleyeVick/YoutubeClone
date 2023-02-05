import React from "react";
import "./index.css";
import "./assets/css/nav.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MainBody from "./components/MainBody";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainBody />} />
			</Routes>
		</div>
	);
}

export default App;
