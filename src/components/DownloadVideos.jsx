import React, { useEffect, useState } from "react";
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

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "6473c3ce7dmsh28c8afd093343dep1d0f1fjsn02e8bc02b53a",
			"X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
		},
	};
	useEffect(() => {
		const data = async () => {
			const result = await fetch("https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=UxxajLWwzqY", options);
			const data = await result.json();

			console.log(data);
		};

		const x = data();
		console.log(x);
	}, []);

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
						</FormMainContainer>
					</form>
				</FormMainContainer>
			</FormOuterContainer>
		</PageContainer>
	);
};

export default DownloadVideos;
