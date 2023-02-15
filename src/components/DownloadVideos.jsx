import React, { useState } from "react";
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
	const [ytlink, setYtLink] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<PageContainer>
			<FormOuterContainer>
				<FormTitleContainer>
					<FormTitle>Enter youtube link</FormTitle>
				</FormTitleContainer>
				<FormMainContainer>
					<form action="" onSubmit={handleSubmit}>
						<FormMainContainer>
							<FormInputContainer>
								<FormInput
									onChange={(e) => {
										setYtLink(e.target.value);
									}}
								/>
								<Sumbit>Download</Sumbit>
							</FormInputContainer>
							{ytlink}
						</FormMainContainer>
					</form>
				</FormMainContainer>
			</FormOuterContainer>
		</PageContainer>
	);
};

export default DownloadVideos;
