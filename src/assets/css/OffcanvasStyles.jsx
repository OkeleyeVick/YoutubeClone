import styled from "styled-components";

export const OffcanvasContainer = styled.div`
	background-color: #fff;
	transition: ${({ theme }) => theme.transition};
	min-height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 320px;
	z-index: 999;
`;

export const OffcanvasHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;
