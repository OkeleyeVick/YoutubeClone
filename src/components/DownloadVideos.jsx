import React from "react";
import {
	FormInput,
	FormInputContainer,
	FormMainContainer,
	FormOuterContainer,
	FormTitle,
	FormTitleContainer,
	PageContainer,
	Sumbit,
} from "../assets/css/FormStyles";

const DownloadVideos = () => {
	return (
		<PageContainer>
			<FormOuterContainer>
				<FormTitleContainer>
					<FormTitle>Enter youtube link</FormTitle>
				</FormTitleContainer>
				<FormMainContainer>
					<form action="">
						<FormMainContainer>
							<FormInputContainer>
								<FormInput />
								<Sumbit>Download</Sumbit>
							</FormInputContainer>
						</FormMainContainer>
					</form>
				</FormMainContainer>
			</FormOuterContainer>
		</PageContainer>
	);
};

export default DownloadVideos;
