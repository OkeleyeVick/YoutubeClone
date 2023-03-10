import styled from "styled-components";

export const PageContainer = styled.div`
	margin-inline: auto;
	max-width: 991px;
	padding: 0 0 3rem;
`;

export const FormOuterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const FormMainContainer = styled.div``;

export const FormSubmitButton = styled.button`
	background-color: ${({ theme }) => {
		const { properties } = theme;
		return properties.primaryClr;
	}};
`;

export const FormTitleContainer = styled.div`
	margin: 2rem 0 0;
	text-align: center;
`;

export const FormTitle = styled.h2`
	font-weight: 500;
	color: #777777;
`;

export const FormInputContainer = styled.div`
	margin-top: 2rem;
	min-height: 3rem;
	position: relative;
	display: flex;
	align-items: center;

	& button {
		font-size: 0.8rem;
		min-height: ${({ theme }) => {
			const { properties } = theme;
			return properties.inputMinHeight;
		}};
		color: #fff;
		background-color: ${({ theme }) => {
			const { properties } = theme;
			return properties.primaryClr;
		}};
		padding: 0 2rem;
		cursor: pointer;
	}
`;
export const FormInput = styled.input.attrs({
	placeholder: "Enter youtube link",
	type: "text",
})`
	transition: ${({ theme }) => {
		const { properties } = theme;
		return properties.transition;
	}};
	min-height: ${({ theme }) => {
		const { properties } = theme;
		return properties.inputMinHeight;
	}};
	width: 100%;
	border: none;
	padding: 0.375rem 1rem;
	border-radius: 5px 0 0 5px;
	border: 1px solid #ccc;
	border-right: none;

	&:focus {
		box-shadow: 0 0 0 0.25rem rgb(255 0 0 / 25%);
		border-color: rgba(255 0 0 / 60%);
		outline: none;
	}
	&::placeholder {
		font-size: 0.8rem;
		letter-spacing: 0.3px;
		color: #d0d0d0;
	}
`;

export const Sumbit = styled.button.attrs({
	type: "submit",
})`
	border-radius: 0 5px 5px 0;
	border: none;
`;
