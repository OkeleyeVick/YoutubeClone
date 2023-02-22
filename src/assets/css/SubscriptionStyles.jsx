import { Link } from "react-router-dom";
import styled from "styled-components";

export const YoutubersWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	gap: 2rem;
	padding: 2rem 0;
`;

export const YoutuberCont = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.2rem;
`;

export const YLink = styled(Link)`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const YImageCont = styled.div`
	overflow: hidden;
`;

export const YImage = styled.img`
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	width: 100px;
	max-width: 100%;
`;

export const YName = styled.span`
	color: ${({ theme }) => theme.properties["text-clr"]};
	font-weight: 900;
	margin: 5px 0 6px;
	font-size: 0.8rem;
`;

export const Subers = styled.span`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.properties.darkGrey};
`;
