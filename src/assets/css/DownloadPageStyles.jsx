import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	margin-top: 4rem;
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
	width: 100%;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.4rem;

	& span {
		font-size: 0.9rem;
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
	padding: 1rem 0;
	border-bottom: 1.4px solid #ccc;
	@media (max-width: 768px) {
		& {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;

export const ResultTableBody = styled.div``;

export const ResultTableBodyInner = styled(ResultTableHeader)`
	border: none;
`;

export const HeaderBodyText = styled.span`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px) {
		& {
			display: ${({ willChange }) => (willChange ? "none" : "inline-flex")};
		}
	}
`;

export const HeadTitle = styled(HeaderBodyText)`
	font-weight: 900;
	font-size: 0.9rem;
`;

export const BodyText = styled(HeaderBodyText)`
	color: #212529;
	font-size: 0.9rem;
`;

export const Quality = styled(BodyText)``;

export const Type = styled(BodyText)``;

export const FileSize = styled(BodyText)``;

export const DownloadLink = styled(Link).attrs({
	download: "",
})`
	color: ${({ theme }) => theme.properties["text-clr"]};
	border: 1px solid ${({ theme }) => theme.properties.borderColor};
	width: max-content;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-inline: auto;
	padding: 0.5rem;
	border-radius: 5px;
	gap: 5px;
	& span {
		font-size: 0.8rem;
	}
`;
