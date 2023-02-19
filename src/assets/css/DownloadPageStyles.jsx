import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
`;

export const GridContainerInner = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	margin-top: 3rem;
	gap: 3rem;
`;

export const GridTitleContainer = styled.div`
	text-align: start;
`;

export const GridTitle = styled.h2`
	font-weight: 400;
	color: ${({ theme }) => {
		const { properties } = theme;
		return properties.textClr;
	}};
`;

export const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	text-align: center;
	align-items: center;
`;

export const IconContainer = styled.div`
	background-color: ${({ theme }) => {
		const { properties } = theme;
		return properties.textClr;
	}};
	padding: 1.5rem;
	width: max-content;
	border-radius: 100vw;
	& svg {
		color: white;
		display: flex;
		scale: 1.9;
	}
`;

export const TextContainer = styled.div`
	font-size: 0.95rem;
	font-weight: 100;
	color: rgb(66, 66, 74);
`;

export const ImageContainer = styled.div`
	aspect-ratio: 16 / 9;
`;

export const ResultContainer = styled.div`
	border: 1px solid ${({ theme }) => theme.properties.borderColor};
	margin: 2rem 0;
	min-height: 60vh;
	background-color: ${({ theme }) => theme.properties.borderC};
	padding: 2rem;
	border-radius: 5px;
	transition: ${({ theme }) => theme.properties.transition};
`;

export const ResultHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem 1.6rem;
	@media (min-width: ${({ theme }) => theme.size.Intermediate}) {
		grid-template-columns: 0.6fr 1fr;
	}
`;

export const ResultImage = styled.div`
	border: 1px solid ${({ theme }) => theme.properties.borderColor};
	border-radius: 4px;
	padding: 0.3rem;
	height: max-content;
`;

export const Image = styled.img`
	height: auto;
	max-width: 100%;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.4rem;

	& span {
		font-size: 1.1rem;
	}
`;

export const Title = styled.h2`
	font-weight: 500;
`;

export const MimeType = styled.div`
	border-bottom: 1.6px solid ${({ theme }) => theme.properties.borderColor};
	margin: 2rem 0;
	& h3 {
		border-bottom: 1.6px solid red;
		width: max-content;
		margin-bottom: -1px;
	}
`;

export const ResultTableHeader = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	@media (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const ResultTableBody = styled(ResultTableHeader)``;

export const HeadTitle = styled.span`
	font-weight: 900;
	text-align: center;

	@media all and (max-width: 768px) {
		& {
			display: ${({ willChange }) => (willChange ? "none" : "block")};
		}
	}
`;

export const Quality = styled.span`
	color: #212529;
`;
