import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OffcanvasContainer = styled.div`
	background-color: #fff;
	transition: ${({ theme }) => {
		const { properties } = theme;
		return properties.transition;
	}};
	min-height: 100vh;
	transform-origin: left;
	/* display: none; */
	padding: 0.1rem 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 260px;
	backdrop-filter: blur(0.5px);
	z-index: 999;
`;

export const OffCanvasHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;
	padding: 0.3rem;
`;

export const OffCanvasBody = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	min-height: 90vh;
`;

export const OffCanvasItemsContainer = styled.ul`
	padding: 0 0.5rem;
	margin: 0.2rem 0;
	:nth-child(even) {
		padding: 0.5rem;
		border-top: ${({ theme }) => {
			const { properties } = theme;
			return properties.smBorder;
		}};
		border-bottom: ${({ theme }) => {
			const { properties } = theme;
			return properties.smBorder;
		}};
	}
`;

export const OffcanvasItem = styled.li``;
export const OffcanvasLink = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.8rem 0.5rem;
	background-color: transparent;
	transition: ${({ theme }) => {
		const { properties } = theme;
		return properties.transition;
	}};
	border-radius: ${({ theme }) => {
		const { properties } = theme;
		return properties.smRadius;
	}};

	&:hover {
		background-color: ${({ theme }) => {
			const { properties } = theme;
			return properties.gray;
		}};
	}
`;

export const Em = styled.em`
	font-size: 1.3rem;
	line-height: 1;
	display: flex;
`;
export const LinkName = styled.span`
	font-size: 0.88rem;
`;
export const LinkNameActive = styled(LinkName)`
	font-weight: 900;
`;
export const LinkNameNotActive = styled(LinkName)`
	font-weight: normal;
`;
