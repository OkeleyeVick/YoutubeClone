import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 0.5rem 1rem;
`;

export const EachGridItem = styled(Link)`
	/* transition:  */
	transition-timing-function: linear;
	transition-delay: 2s;
	transition-duration: 200ms;
	z-index: 100000;

	&:hover {
		transform: scale(1.2);
		z-index: 1000001;
	}
`;

export const ImageContainer = styled.div`
	aspect-ratio: 16 / 9;
	border-radius: 8px;
	overflow: hidden;
	position: relative;
	& img {
		object-fit: contain;
	}
	& span {
		position: absolute;
		bottom: 0;
		color: #fff;
		background-color: rgba(0 0 0 / 40%);
		border-radius: 6px;
	}
`;

export const Details = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 5px;
`;

export const Image = styled.img`
	width: auto;
	max-width: 100%;
`;

// export const
