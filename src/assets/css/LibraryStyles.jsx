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
