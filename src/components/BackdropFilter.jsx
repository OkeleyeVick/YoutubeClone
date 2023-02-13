import React, { useContext } from "react";
import styled from "styled-components";
import { SideBarContext } from "../App";

const BackdropFilter = () => {
	const { sideBarOpen, setSideBarWidth } = useContext(SideBarContext);

	return (
		<Layer
			isOpen={sideBarOpen}
			style={
				!sideBarOpen
					? {
							display: "none",
					  }
					: { display: "block" }
			}
			onClick={() => {
				setSideBarWidth((p) => !p);
			}}></Layer>
	);
};

export default BackdropFilter;

export const Layer = styled.div`
	background-color: rgba(0 0 0 / 45%);
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
`;
