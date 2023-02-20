import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBarContainer = styled.div`
	position: relative;
`;

export const SideBarContainerInner = styled.div`
	position: fixed;
	width: 60px;
	padding: 0.6rem 5px;
	display: flex;
	flex-direction: column;
	left: 0;
	top: 0;
	z-index: 50;
	background-color: #fff;

	@media (min-width: 768px) {
		& {
			row-gap: 2rem;
		}
	}
`;

export const MenuToggler = styled.button.attrs({
	type: "button",
})`
	border: none;
	margin-inline: auto;
	font-size: 1.5rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	padding: 8px;
	position: relative;
	background-color: transparent;
	transition: ${({ theme }) => {
		const { properties } = theme;
		return properties.transition;
	}};

	&:hover {
		background-color: ${({ theme }) => {
			const { properties } = theme;
			return properties.gray;
		}};
	}
`;

export const PageLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
`;

export const SideBarLink = styled(NavLink)`
	border-radius: 6px;
	flex-direction: column;
	display: flex;
	align-items: center;
	aspect-ratio: 1 / 1;
	justify-content: center;
	display: none;
	transition: ${({ theme }) => {
		const { properties } = theme;
		return properties.transition;
	}};

	&:hover {
		background-color: ${({ theme }) => {
			const { properties } = theme;
			return properties.hover;
		}};
	}
	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		display: inherit;
	}
`;

export const Em = styled.em`
	font-size: 1.3rem;
	color: ${({ theme }) => {
		const { properties } = theme;
		return properties["text-clr"];
	}};
`;

export const LinkText = styled.small`
	font-size: 0.6rem;
	padding: 0 5px;
	text-align: center;
	color: ${({ theme }) => {
		const { properties } = theme;
		return properties["text-clr"];
	}};
`;
