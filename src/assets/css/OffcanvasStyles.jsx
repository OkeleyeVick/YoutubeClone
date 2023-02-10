import styled from "styled-components";

export const OffcanvasContainer = styled.div`
	background-color: #fff;
	transition: ${({ theme }) => theme.transition};
	min-height: 100vh;
	/* display: none; */
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 320px;
	z-index: 999;
`;
