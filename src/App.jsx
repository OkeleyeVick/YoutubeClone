import React, { createContext, useState } from "react";
import "./index.css";
import "./assets/css/nav.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

//* components
import Sidebar from "./components/Sidebar";
import MainBody from "./components/MainBody";
import BackdropFilter from "./components/BackdropFilter";

const properties = {
	borderColor: "#ddd",
	transition: "280ms ease-in-out",
	smShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
	smRadius: "6px",
	mdRadius: "10px",
	gray: "#E6E6E6",
	"text-clr": "#0f0f0f",
	smBorder: "1px solid #0000001a",
	hover: "#F2F2F2",
	darkGrey: "#909090",
	darkerGrey: "#090909c2",
	primaryClr: "#ff0000",
	inputMinHeight: "3rem",
	textClr: "rgb(66, 66, 74)",
	borderColorFaint: "#e6e6e670",
};
const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "426px",
	Intermediate: "600px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};
const GlobalStyles = createGlobalStyle`
	::-webkit-scrollbar {
		width: 7px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => {
			const { properties } = theme;
			return properties.darkGrey;
		}};
		border-radius: 1rem;
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: ${({ theme }) => {
			const { properties } = theme;
			return properties.gray;
		}};
	}
	body{
		margin: 0;
	}
	:is(h1, h2, h3, h4, h5, h6){
		font-weight: 500;
		margin: 0;

	}
	:is(ul, li){
		list-style: none;
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration: none
	}
`;

export const SideBarContext = createContext();

function App() {
	const [sideBarOpen, setSideBarWidth] = useState(false);
	return (
		<SideBarContext.Provider value={{ sideBarOpen, setSideBarWidth }}>
			<ThemeProvider theme={{ properties, size }}>
				<GlobalStyles />
				<BackdropFilter />
				<Sidebar />
				<MainBody />
			</ThemeProvider>
		</SideBarContext.Provider>
	);
}

export default App;
