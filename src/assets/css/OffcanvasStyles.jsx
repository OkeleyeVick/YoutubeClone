import styled from "styled-components";

export const OffcanvasContainer = styled.div`
	background-color: #fff;
	transition: ${({ theme }) => theme.transition};
	min-height: 100vh;
	transform-origin: left;
	padding: 1rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 320px;
	z-index: 999;
`;

export const OffCanvasHeader = styled.div`
	display: fle;
	align-items: center;
	gap: 0.6rem;
`;
