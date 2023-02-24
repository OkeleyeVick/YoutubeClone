import { Link } from "react-router-dom";
import styled from "styled-components";

export const ParentContainer = styled.div`
	display: grid;
	gap: 1.4rem;
	align-items: center;
	padding: 0 1rem;
	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		& {
			grid-template-columns: 1fr 0.3fr;
		}
	}
`;
export const LargeContainer = styled.div`
	padding: 1rem;
`;

export const SmallContainer = styled.div`
	display: none;

	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		& {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 2rem;
		}
	}
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ContentCont = styled.div`
	&:nth-child(n + 1):not(:last-child) {
		border-bottom: 1.3px solid ${({ theme }) => theme.properties.borderColor};
	}
	padding: 1rem 0;
`;

export const Body = styled.div`
	padding: 1rem 0;
`;

export const ContentText = styled.span`
	color: ${({ theme }) => theme.properties.textClr};
	font-size: 0.86rem;
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	& span {
		font-weight: 600;
		font-size: 0.88rem;
		letter-spacing: 0.3px;
	}
`;

export const Right = styled.div``;

export const Em = styled.em`
	display: flex;
	font-size: 1.2rem;
`;

export const L = styled(Link)`
	font-size: 0.85em;
`;

export const ImageCont = styled.div`
	overflow: hidden;
	border-radius: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	max-width: 100%;
	aspect-ratio: 1 / 1;
	width: 80px;
	object-fit: cover;
`;

export const LinerContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Liner = styled.span`
	border-top: 1px solid ${({ theme }) => theme.properties.borderColor};
	padding: 0.5em 0;
	color: ${({ theme }) => theme.properties["text-clr"]};
	display: flex;
	align-items: center;
	justify-content: space-between;

	& small {
		color: ${({ theme }) => theme.properties.darkGrey};
		font-size: 0.78rem;
	}
	&:last-child {
		border-bottom: 1px solid ${({ theme }) => theme.properties.borderColor};
	}
`;
