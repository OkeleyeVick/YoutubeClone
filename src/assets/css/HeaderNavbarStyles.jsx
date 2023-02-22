import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	padding: 0.6rem 1rem;
	gap: 1rem;
	position: fixed;
	top: 0;
	background-color: #fff;
	left: 0;
	right: 0;
	margin-left: 55px;
	z-index: 60;

	& > div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media (max-width: ${({ theme }) => theme.size.tablet}) {
		& {
			z-index: 90;
		}
	}
`;

export const MenuToggler = styled.button.attrs({
	type: "button",
})`
	border: none;
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
		background-color: #e5e5e5;
	}
`;

export const YoutubeLogo = styled.img`
	max-width: 100%;
	width: calc(16px * 6);
`;

export const IconLogo = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

export const SearchWrapper = styled(IconLogo)`
	flex-grow: 2;
	justify-content: center;

	@media (max-width: 768px) {
		& {
			display: none;
		}
	}
`;

export const SearchInput = styled.input`
	min-height: 2.6rem;
	border-radius: 100vw 0 0 100vw;
	border: 1.3px solid #ccc;
	outline: none;
	padding: 0.375rem 1rem 0.475rem 2.5rem;
	min-width: 380px;

	&:focus {
		border: 1.5px solid
			${({ theme }) => {
				const { properties } = theme;
				return properties.primaryClr;
			}};
	}
`;

export const Dropdown = styled.div`
	position: absolute;
	border-radius: ${({ theme }) => {
		const { properties } = theme;
		return properties.smRadius;
	}};
	background-color: rgba(0 0 0 / 75%);
	box-shadow: ${({ theme }) => {
		const { properties } = theme;
		return properties.smRadius;
	}};
	padding: 0.7rem 0.8rem;
	top: 110%;
	left: 50%;
	translate: -50% 0%;
	visibility: hidden;
	opacity: 0;
	transition: ${({ theme }) => {
		const { properties } = theme;
		return properties.transition;
	}};

	& small {
		font-size: 0.7rem;
		letter-spacing: 0.2px;
		width: max-content;
		white-space: nowrap;
		display: flex;
		align-items: center;
		color: #fff;
	}
`;

export const SearchButton = styled.button`
	background-color: #848383;
	min-height: 2.6rem;
	font-size: 1.2rem;
	color: ${({ theme }) => {
		const { properties } = theme;
		return properties.darkerGrey;
	}};
	position: relative;
	border: none;
	background-color: transparent;
	cursor: pointer;
	padding: 0 1.2rem;
	border-radius: 0 100vw 100vw 0;
	border: 1.3px solid #ccc;
	border-left: none;
	display: grid;
	place-content: center;

	&:hover {
		background-color: #f0f0f0;
	}
	&:hover ${Dropdown} {
		opacity: 1;
		visibility: visible;
	}
`;

export const Em = styled.em`
	position: absolute;
	top: 50%;
	left: 1.3rem;
	transform: translate(-50%, -50%);
	line-height: 1;
	display: flex;
	font-size: 1.1rem;
	color: #848383;
`;

export const RightIcons = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const IconName = styled.div`
	position: absolute;
	box-shadow: ${({ theme }) => {
		const { properties } = theme;
		return properties.smShadow;
	}};
	display: flex;
	align-items: center;
	padding: 1rem;
	border-radius: ${({ theme }) => {
		const { properties } = theme;
		return properties.smRadius;
	}};
`;

export const AvaterContainer = styled.div`
	position: relative;
	margin: 0 0 0 1.2rem;
	background-color: transparent;
	padding: 0;
`;

export const AvaterInner = styled(Link).attrs({
	role: "button",
})``;

export const AvatarWrapper = styled.img`
	border-radius: 100vw;
	position: relative;
	width: 35px;
`;

export const ClickedDropdown = styled.div`
	position: absolute;
`;

export const MicroPhone = styled(MenuToggler)`
	font-size: 1.365rem;
	color: ${({ theme }) => {
		const { properties } = theme;
		return properties.darkerGrey;
	}};
	&:hover ${Dropdown} {
		opacity: 1;
		visibility: visible;
	}
`;
export const VideoIconWrapper = styled(MenuToggler)`
	font-size: 1.26rem;
	color: ${({ theme }) => {
		const { properties } = theme;
		return properties.darkerGrey;
	}};
	&:hover ${Dropdown} {
		opacity: 1;
		visibility: visible;
	}
`;
export const BellIconWrapper = styled(VideoIconWrapper)`
	color: ${({ theme }) => {
		const { properties } = theme;
		return properties.darkerGrey;
	}};
	&:hover ${Dropdown} {
		opacity: 1;
		visibility: visible;
	}
`;

export const Pill = styled.button`
	background-color: ${({ theme }) => theme.properties.ash};
	border-radius: ${({ theme }) => theme.properties.smRadius};
	font-size: 0.85rem;
	color: ${({ theme }) => theme.properties.textClr};
	border: none;
	transition: ${({ theme }) => theme.properties.transition};
	padding: 10px 12px;
	cursor: pointer;
	width: max-content;
	white-space: nowrap;
	margin-right: 10px;

	&:hover {
		background-color: ${({ theme }) => theme.properties.darkAsh};
	}
`;

export const AvatarDropdown = styled.div`
	background-color: #fff;
	border-radius: ${({ theme }) => theme.properties.mdRadius};
	right: 0%;
	top: 100%;
	position: absolute;
	max-width: 300px;
	max-height: 576px;
	width: 300px;
	z-index: 65;
	transition: ${({ theme }) => theme.properties.transition};
	aspect-ratio: 1 / 1;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	opacity: ${({ isActive }) => (isActive ? "1" : "0")};
	visibility: ${({ isActive }) => (isActive ? "visibility" : "hidden")};

	@media (min-width: ${({ theme }) => theme.size.Intermediate}) {
		& {
			right: 120%;
			top: 0%;
		}
	}
`;

export const ProfileContainer = styled.div`
	padding: 1rem;
	&:not(:last-child) {
		border-bottom: ${({ theme }) => theme.properties.smBorder};
	}
`;

export const EachContainer = styled(ProfileContainer)`
	display: flex;
	align-items: flex-start;
	gap: ${({ flexCol }) => (!flexCol ? "1rem" : "0")};
	flex-direction: ${({ flexCol }) => (flexCol ? "column" : "row")};
	padding: ${({ flexCol }) => (flexCol ? ".3rem 0" : "1rem")};

	& + ul {
		overflow-y: scroll;
		height: 145%;
		@media (min-width: ${({ theme }) => theme.size.Intermediate}) {
			& {
				height: 160%;
			}
		}
	}
`;

export const Span = styled.span`
	display: flex;
	flex-direction: column;
	& span {
		font-size: 0.9rem;
	}
	& small {
		font-size: 0.75rem;
	}
	& a {
		font-size: 0.8rem;
		margin-top: 9px;
		color: blue;
	}
`;

export const EachContainerLink = styled(Link)`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;
	transition: ${({ theme }) => theme.properties.transition};
	padding: 0.6rem 1rem;
	color: ${({ theme }) => theme.properties["text-clr"]};
	&:hover {
		& {
			background-color: ${({ theme }) => theme.properties.darkAsh};
		}
	}
	& span {
		font-size: 0.81rem;
	}
	& em {
		display: flex;
		font-size: 1.4rem;
		stroke-width: 2px;
	}
`;
