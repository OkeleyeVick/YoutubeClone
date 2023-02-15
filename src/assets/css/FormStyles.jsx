import ImageDownloader from "../images/youtube-image-comp.svg";
import styled from "styled-components";

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
`;

export const FormMainContainer = styled.div`
	border-radius: 1rem;
	padding: 1rem;
	backdrop-filter: blur(4px) saturate(107%);
	/* background-color: rgba(17, 25, 40, 0.51); */
	border-radius: 12px;
`;

export const FormTitleContainer = styled.div`
	margin: 1.8rem 0;
`;

export const FormTitle = styled.h2``;

export const FormInputContainer = styled.div``;
export const FormInput = styled.input.attrs({
	placeholder: "Enter youtube link",
	type: "text",
})``;
