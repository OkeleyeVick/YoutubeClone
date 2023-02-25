import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1.5em 1.3rem;
	@media (max-width: ${({ theme }) => theme.size.mobileL}) {
		row-gap: 3rem;
	}
`;

export const ImageContainer = styled(Link)`
	border-radius: 10px;
	overflow: hidden;
	position: relative;

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

export const ImageContainerInner = styled.div`
	aspect-ratio: 16 / 9;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	transition: ${({ theme }) => theme.properties.transition};
`;

export const EachGridItem = styled.div`
	transition-timing-function: ease;
	transition-delay: 200ms;
	background-color: #fff;
	transition-duration: 200ms;
	box-shadow: transparent 0px 8px 24px;
	border-radius: 10px;

	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		&:has(${ImageContainer}:hover) {
			transform: scale(1.18);
			z-index: 51;
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		}
		&:has(${ImageContainer}:hover) ${ImageContainerInner} {
			border-radius: 10px 10px 0 0;
		}
	}
`;

export const Details = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 8px;
	padding: 0.8rem 8px 0;
`;

export const Image = styled.img`
	width: auto;
	max-width: 100%;
`;

export const ProfileIcon = styled(Image)`
	width: 35px;
	aspect-ratio: 1 / 1;
	border-radius: 100vw;
	object-fit: cover;
`;

export const DetailsInner = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 4px;
`;

export const Title = styled(Link)`
	font-size: 0.8rem;
	font-weight: 600;
	color: #000;
	overflow: hidden;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	display: -webkit-box;
`;

export const ChannelName = styled.small`
	color: #aaa;
	margin-top: 5px;
	display: flex;
`;

export const DropdownMenuContainer = styled.div`
	position: absolute;
	background-color: #fff;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	border-radius: 8px;
	min-width: 30vh;
	z-index: 50;
	right: 0;
	transition: ${({ theme }) => theme.properties.transition};
	padding: 5px;
	border: 1px solid ${({ theme }) => theme.properties.borderColorFaint};
	opacity: 0;
	visibility: hidden;
`;

export const LibraryItemDropdown = styled(DropdownMenuContainer)`
	opacity: ${({ isActive }) => (isActive ? "1" : "0")};
	visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
`;
export const MenuDropdown = styled.div`
	position: relative;

	&:hover > ${DropdownMenuContainer} {
		opacity: 1;
		visibility: visible;
	}
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

export const LinkItem = styled(Link)`
	display: flex;
	align-items: center;
	white-space: nowrap;
	gap: 1rem;
	padding: 7px 10px;
	transition: ${({ theme }) => theme.properties.transition};
	border-radius: ${({ theme }) => theme.properties.smRadius};
	color: ${({ theme }) => theme.properties.textClr};
	&:hover {
		background-color: ${({ theme }) => theme.properties.gray};
	}
	& span {
		white-space: nowrap;
		font-size: 0.8rem;
	}
`;

export const Em = styled.em`
	display: flex;
	& svg {
		font-size: 1.3rem;
	}
`;

export const ViewAndTime = styled.span`
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 0.85rem;
	color: ${({ theme }) => theme.properties.darkGrey};
`;
