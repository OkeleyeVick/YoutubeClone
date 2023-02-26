import { Link } from "react-router-dom";
import styled from "styled-components";

export const ParentContainer = styled.div`
	display: grid;
	gap: 1.4rem;
	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		& {
			grid-template-columns: 1fr 0.3fr;
			padding: 0 1rem;
		}
	}
`;
export const LargeContainer = styled.div`
	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		& {
			padding: 0 1rem;
		}
	}
`;

export const SmallContainer = styled.div`
	display: none;
	margin-top: 8rem;
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
	padding: 1.4rem 0 1.2rem;
`;

export const Body = styled.div`
	padding: 1rem 0;
	display: ${({ hasGridItem }) => (hasGridItem ? "grid" : "block")};
	grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
	gap: 2rem 0.6rem;
`;

export const ContentText = styled.span`
	color: ${({ theme }) => theme.properties.textClr};
	font-size: 0.8rem;
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;
	& :is(h1, h2, h3, h4, h5, h6) {
		font-weight: 600;
		font-size: 0.86rem;
		letter-spacing: 0px;
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

export const RightImage = styled.img`
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
		font-size: 0.7rem;
	}
	&:last-child {
		border-bottom: 1px solid ${({ theme }) => theme.properties.borderColor};
	}
`;

export const TriggerButton = styled.button`
	border-radius: 100vw;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 6px;
	margin-right: -5px;
	border: none;
	opacity: 0;
	visibility: hidden;
	background-color: transparent;
	transition: ${({ theme }) => theme.properties.transition};
	@media (max-width: 600px) {
		opacity: unset;
		visibility: unset;
	}
	& svg {
		color: ${({ theme }) => theme.properties.darkerGrey};
		font-size: 1.1rem;
	}
	&:hover {
		background-color: ${({ theme }) => theme.properties.gray};
	}
`;

export const Container = styled.div`
	transition: ${({ theme }) => theme.properties.transition};
	display: flex;
	flex-direction: column;
	row-gap: 0.8rem;

	&:hover ${TriggerButton} {
		opacity: 1;
		visibility: visible;
	}
`;

export const IconContainer = styled.div`
	visibility: hidden;
	opacity: 0;
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 5px;
	top: 10px;
	row-gap: 5px;
	transition: ${({ theme }) => theme.properties.transition};

	& span {
		position: relative;
	}

	& span small {
		position: absolute;
		right: 0;
		white-space: nowrap;
		top: 50%;
		transform: translate(-36%, -50%);
		scale: 0 1;
		color: #fff;
		background-color: rgba(0 0 0 / 70%);
		height: 100%;
		display: flex;
		align-items: center;
		font-size: 0.7rem;
		padding: 4px 6px;
		transition: ${({ theme }) => theme.properties.transition};
		border-radius: 3px;
		opacity: 0;
		transform-origin: right;
	}

	& span:hover small {
		opacity: 1;
		scale: 1 1;
	}
`;

export const A = styled(Link)`
	display: flex;
	flex-direction: column;

	&:hover ${IconContainer} {
		visibility: visible;
		opacity: 1;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border-radius: ${({ theme }) => theme.properties.avgRadius};
	aspect-ratio: 16 / 9;
	overflow: hidden;
`;

export const Image = styled.img`
	object-fit: cover;
	width: 100%;
`;

export const IconEm = styled.em`
	display: flex;
	background-color: rgba(0 0 0 / 70%);
	border-radius: 3px;
	font-size: 1.2rem;
	color: #fff;
	padding: 3px;
	:is(&, & svg) {
		transition: ${({ theme }) => theme.properties.transition};
	}
	&:hover {
		background-color: rgba(0 0 0 / 90%);
	}
`;

export const Duration = styled.span`
	position: absolute;
	right: 5px;
	bottom: 6px;
	background-color: rgba(0 0 0 / 75%);
	color: #fff;
	font-size: 0.65rem;
	padding: 4px 10px;
	letter-spacing: 0.2px;
	line-height: 1.2;
	border-radius: 3px;
`;

export const Loader = styled.div``;

export const ContainerContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	& > div {
		position: relative;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.properties["text-clr"]};
	font-weight: 600;
	letter-spacing: -0.4px;
	word-spacing: 0.2px;
	font-size: 0.8rem;
`;

export const Channel = styled.span`
	display: flex;
	align-items: center;
	gap: 4px;
`;

export const ChannelName = styled.span`
	font-size: 0.7rem;
	color: ${({ theme }) => theme.properties.textClr};
`;

export const Verify = styled.span`
	& svg {
		font-size: 0.9rem;
		display: flex;
		color: ${({ theme }) => theme.properties.darkGrey};
	}
`;
