import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
`;

export const GridContainerInner = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	margin-top: 3rem;
	gap: 3rem;
`;

export const GridTitleContainer = styled.div`
	text-align: start;
`;

export const GridTitle = styled.h2`
	font-weight: 400;
	color: ${({ theme }) => {
		const { properties } = theme;
		return properties.textClr;
	}};
`;

export const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	text-align: center;
	align-items: center;
`;

export const IconContainer = styled.div`
	background-color: ${({ theme }) => {
		const { properties } = theme;
		return properties.textClr;
	}};
	padding: 1.5rem;
	width: max-content;
	border-radius: 100vw;
	/* box-shadow: rgb(66, 66, 74); */

	& svg {
		color: white;
		display: flex;
		scale: 1.9;
	}
`;

export const TextContainer = styled.div`
	font-size: 0.95rem;
	font-weight: 100;
	color: rgb(66, 66, 74);
`;

export const ImageContainer = styled.div`
	aspect-ratio: 16 / 9;
`;
