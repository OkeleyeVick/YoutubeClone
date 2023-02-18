import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 0.5rem;
`;

export const EachGridItem = styled(Link)`
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
	aspect-ratio: 1 / 1;
`;

// export const
