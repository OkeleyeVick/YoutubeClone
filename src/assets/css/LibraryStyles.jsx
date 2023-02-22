import { Link } from "react-router-dom";
import styled from "styled-components";

export const ParentContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.3fr;
	gap: 1.4rem;
	align-items: center;
`;
export const LargeContainer = styled.div`
	padding: 1rem;
`;

export const SmallContainer = styled.div`
	display: none;

	@media (min-width: ${({ theme }) => theme.size.Intermediate}) {
		& {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 2rem;
		}
	}
	display: flex;
	flex-direction: column;
	row-gap: 2em;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	& span {
		font-weight: 900;
		font-size: 0.9rem;
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
`;

export const Liner = styled.span`
	border: 1px solid ${({ theme }) => theme.properties.borderColorfaint};
	padding: 1rem 0;
	color: ${({ theme }) => theme.properties["text-clr"]};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
