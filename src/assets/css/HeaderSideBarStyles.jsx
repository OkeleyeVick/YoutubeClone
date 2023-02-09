import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBarContainer = styled.div`
	position: relative;
`;

export const SideBarContainerInner = styled.div`
	position: fixed;
	width: 70px;
	padding: 0.5rem 5px;
	display: flex;
	bottom: 0;
	flex-direction: column;
	row-gap: 2rem;
	left: 0;
	top: 0;
	z-index: 1;
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
	transition: ${({ theme }) => theme.transition};

	&:hover {
		background-color: #e5e5e5;
	}
`;

export const PageLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
`;

export const SideBarLink = styled(NavLink)`
	border-radius: 6px;
	flex-direction: column;
	display: flex;
	align-items: center;
	aspect-ratio: 1 / 1;
	justify-content: center;
	transition: ${({ theme }) => theme.transition};

	&:hover {
		background-color: ${({ theme }) => theme.gray};
	}
`;

export const Em = styled.em`
	font-size: 1.4rem;
	color: ${({ theme }) => theme["text-clr"]};
`;

export const LinkText = styled.small`
	font-size: 0.6rem;
	padding: 0 5px;
	text-align: center;
	color: ${({ theme }) => theme["text-clr"]};
`;
