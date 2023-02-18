import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 4rem 1.2rem;
`;

export const ImageContainer = styled.div`
	aspect-ratio: 16 / 9;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	& img {
		object-fit: contain;
	}
	& span {
		position: absolute;
		bottom: 0;
		background-color: rgba(0 0 0 / 80%);
		border-radius: 4px;
		right: 0;
		font-size: 0.68rem;
		padding: 4px 8px;
		font-weight: 900;
		letter-spacing: 0.4px;
		color: #fff;
		margin: 0 0.6rem 0.4rem 0;
	}
`;

export const EachGridItem = styled(Link)`
	transition-timing-function: ease;
	transition-delay: 200ms;
	transition-duration: 200ms;
	z-index: 50;

	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		&:has(${ImageContainer}:hover) {
			transform: scale(1.2);
			z-index: 51;
		}
	}
`;

export const Details = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 10px;
	padding-top: 0.8rem;
`;

export const Image = styled.img`
	width: auto;
	max-width: 100%;
`;

export const ProfileIcon = styled(Image)`
	width: 40px;
	aspect-ratio: 1 / 1;
	border-radius: 100vw;
	object-fit: cover;
`;

export const DetailsInner = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 4px;
`;

export const Title = styled.h5`
	font-size: 0.8rem;
	font-weight: 600;
	color: #000;
`;

export const ChannelName = styled.small`
	color: #aaa;
	margin-top: 5px;
	display: flex;
`;

export const MenuDropdown = styled.div`
	position: relative;
`;

export const DropdownToggler = styled.button`
	border-radius: 100vw;
	padding: 0;
	display: flex;
	cursor: pointer;
	padding: 5px;
	transition: ${({ theme }) => {
		const { properties } = theme;
		return properties.transition;
	}};
	background-color: transparent;
	border: none;
	& svg {
		font-size: 1.6rem;
	}

	&:hover {
		background-color: ${({ theme }) => {
			const { properties } = theme;
			return properties.borderColor;
		}};
	}
`;
