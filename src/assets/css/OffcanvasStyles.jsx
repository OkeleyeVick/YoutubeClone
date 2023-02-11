import styled from "styled-components";

export const OffcanvasContainer = styled.div`
	background-color: #fff;
	transition: ${({ theme }) => theme.transition};
	min-height: 100vh;
	transform-origin: left;
	padding: 0.1rem 1rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;
	backdrop-filter: blur(0.5px);
	z-index: 999;
`;

export const OffCanvasHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;
	padding: 0.3rem;
`;

export const OffCanvasBody = styled.div`
	display: flex;
	flex-direction: column;
`;

export const OffCanvasItemsContainer = styled.div`
	padding: 0 0.5rem;
	:nth-child(even) {
		border: ${({ theme }) => theme.smBorder};
	}
`;

export const OffcanvasItem = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
