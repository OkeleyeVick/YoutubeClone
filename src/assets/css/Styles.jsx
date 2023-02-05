import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.2rem 1rem;
`;

export const MenuToggler = styled.button.attrs({
	type: "button",
})`
	border: none;
	font-size: 1.4rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	padding: 8px;
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

export const Icon_et_logo = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

export const SearchWrapper = styled(Icon_et_logo)`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const SearchInput = styled.input`
	min-height: 2.8rem;
	border-radius: 100vw;
	border: 1px solid #ccc;
	outline: none;
	padding: 0.375rem 1rem 0.375rem 2rem;

	&:focus {
		border: 1.5px solid ${({ theme }) => theme.borderColor};
	}
`;

export const MicroPhone = styled(MenuToggler)``;

export const Em = styled.em`
	position: absolute;
	top: 50%;
	left: 1rem;
	transform: translate(-50%, -50%);
	line-height: 1;
	display: flex;
	color: #848383;
`;
