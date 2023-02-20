import styled from "styled-components";

export const MainBodyContainer = styled.div`
	@media (min-width: ${({ theme }) => theme.size.tablet}) {
		& {
			margin-left: 60px;
		}
	}
`;
export const ContainerInner = styled.div`
	padding: 2rem 2rem 0;
	margin-top: 2rem;
`;
