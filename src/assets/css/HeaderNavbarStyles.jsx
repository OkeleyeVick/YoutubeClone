import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	gap: 1rem;
	position: fixed;
	top: 0;
	background-color: #fff;
	left: 0;
	right: 0;
	margin-left: 55px;
	z-index: 1;
`;

export const MenuToggler = styled.button.attrs({
	type: "button",
})`
	border: none;
	font-size: 1.7rem;
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

export const YoutubeLogo = styled.img`
	max-width: 100%;
	width: 6rem;
`;

export const IconLogo = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

export const SearchWrapper = styled(IconLogo)`
	flex-grow: 2;
	justify-content: center;
`;

export const SearchInput = styled.input`
	min-height: 2.6rem;
	border-radius: 100vw 0 0 100vw;
	border: 1.3px solid #ccc;
	outline: none;
	padding: 0.375rem 1rem 0.475rem 2.5rem;
	min-width: 450px;

	&:focus {
		border: 1.5px solid
			${({ theme }) => {
				const { properties } = theme;
				return properties.borderColor;
			}};
	}
`;

export const Dropdown = styled.div`
	position: absolute;
	border-radius: ${({ theme }) => theme.smRadius};
	background-color: rgba(0 0 0 / 75%);
	box-shadow: ${({ theme }) => theme.smShadow};
	padding: 0.7rem 0.8rem;
	top: 110%;
	left: 50%;
	translate: -50% 0%;
	visibility: hidden;
	opacity: 0;
	transition: ${({ theme }) => theme.transition};

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
	color: #000;
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
	box-shadow: ${({ theme }) => theme.smShadow};
	display: flex;
	align-items: center;
	padding: 1rem;
	border-radius: ${({ theme }) => theme.smRadius};
`;

export const AvaterContainer = styled(MenuToggler)`
	position: relative;
	margin: 0 0 0 1.2rem;
	background-color: transparent;
	padding: 0;
`;
export const AvatarWrapper = styled.img`
	border-radius: 100vw;
	position: relative;
	max-width: 35px;
	width: 100%;
`;

export const ClickedDropdown = styled.div`
	position: absolute;
`;

export const MicroPhone = styled(MenuToggler)`
	font-size: 1.365rem;
	&:hover ${Dropdown} {
		opacity: 1;
		visibility: visible;
	}
`;
export const VideoIconWrapper = styled(MenuToggler)`
	font-size: 1.26rem;
	&:hover ${Dropdown} {
		opacity: 1;
		visibility: visible;
	}
`;
export const BellIconWrapper = styled(VideoIconWrapper)`
	&:hover ${Dropdown} {
		opacity: 1;
		visibility: visible;
	}
`;
