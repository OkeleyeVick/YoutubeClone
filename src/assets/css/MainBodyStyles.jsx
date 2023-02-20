import styled from "styled-components";

export const MainBodyContainer = styled.div``;
export const ContainerInner = styled.div`
	margin-top: 2rem;
	padding: 2rem 1rem 0;
	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		& {
			padding: 2rem 2rem 0;
		}
	}
	@media (min-width: ${({ theme }) => theme.size.laptop}) {
		& {
			margin-left: 60px;
		}
	}
`;
