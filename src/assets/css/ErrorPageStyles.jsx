import styled from "styled-components";

export const Body = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;

	& > div {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;

		& img {
			scale: 0.7;
			width: 100%;
			margin-inline: auto;
			max-width: 991px;
		}
	}
`;

export const Message = styled.div`
	text-align: center;
	& > h2 {
		font-size: 1.5rem;
	}
`;

export const BackToHomeLink = styled.button`
	background-color: ${({ theme }) => theme.properties.primaryClr};
	color: #fff;
	border-radius: ${({ theme }) => theme.properties.smRadius};
	margin-inline: auto;
	padding: 0.8rem 2.8rem;
	cursor: pointer;
	font-size: 0.8rem;
	border: none;
`;
