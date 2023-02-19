import React, { useContext } from "react";
import styled from "styled-components";
import { SideBarContext } from "../App";

export const Layer = styled.div`
	background-color: rgba(0 0 0 / 45%);
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	transition: 200ms ease-in-out;
	opacity: 0;
	transform-origin: center center;
	visibility: hidden;
`;

const show = {
	opacity: "1",
	visibility: "visible",
};

const hide = {
	opacity: "0",
	visibility: "hidden",
};

const BackdropFilter = () => {
	const { sideBarOpen, setSideBarWidth } = useContext(SideBarContext);

	return (
		<Layer
			style={!sideBarOpen ? hide : show}
			onClick={() => {
				setSideBarWidth((p) => !p);
			}}></Layer>
	);
};

export default BackdropFilter;
