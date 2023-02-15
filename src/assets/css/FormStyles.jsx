import ImageDownloader from "../images/youtube-image-comp.svg";
import styled from "styled-components";

const variable = ({ theme }) => {
	const { properties } = theme;
	console.log(properties);
};

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 90vh;
`;

export const FormOuterContainer = styled.div`
	background-image: url(${ImageDownloader});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	border: 1.2px solid rgba(255, 255, 255, 0.125);
	max-width: 991px;
	margin-inline: auto;
	width: 100%;
	background-color: rgb(255, 105, 180, 0.1);
`;

export const FormMainContainer = styled.div`
	padding: 1rem;
`;

export const FormSubmitButton = styled.button`
	background-color: ${({ theme }) => {
		const { properties } = theme;
		return properties.primaryClr;
	}};
`;

export const FormTitleContainer = styled.div`
	margin: 1.8rem 0;
	text-align: center;
`;

export const FormTitle = styled.h1`
	font-weight: 900;
`;

export const FormInputContainer = styled.div`
	min-height: 3rem;
	position: relative;
	display: flex;
	align-items: center;

	& button {
		min-height: ${({ theme }) => {
			const { properties } = theme;
			return properties.inputMinHeight;
		}};
		color: #fff;
		background-color: ${({ theme }) => {
			const { properties } = theme;
			return properties.primaryClr;
		}};
		padding: 0 1rem;
		cursor: pointer;
	}
`;
export const FormInput = styled.input.attrs({
	placeholder: "Enter youtube link",
	type: "text",
})`
	min-height: ${({ theme }) => {
		const { properties } = theme;
		return properties.inputMinHeight;
	}};
	width: 100%;
	border: none;
	padding: 0.375rem 1rem;
	border-radius: 6px 0 0 6px;

	&:focus {
		border: none;
		box-shadow: none;
		outline: none;
	}
`;

export const Sumbit = styled.button.attrs({
	type: "button",
})`
	border-radius: 0 6px 6px 0;
	border: none;
`;
