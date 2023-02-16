import styled from "styled-components";

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 0.5rem;
`;

export const EachGridItem = styled.div`
	transition: ${({ theme }) => {
		const { properties } = theme;
		return properties.transition;
	}};
`;

export const ImageContainer = styled.div`
	aspect-ratio: 16 / 9;
	& img {
		object-fit: contain;
	}
`;

export const Details = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 5px;
`;

export const Image = styled.img`
	border-radius: 50%;
	width: 40px;
	aspect-ratio: 1 / 1;
`;
