import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import {
	Container,
	GridContainerInner,
	GridItem,
	GridTitle,
	GridTitleContainer,
	IconContainer,
	TextContainer,
} from "../assets/css/DownloadPageStyles";
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
	const [returnedData, setReturnedData] = useState();

	const extractAndCopyId = (youtubeLink) => {
		const youtubeLinkId = youtubeLink.split(".be/")[1];
		return youtubeLinkId;
		// excerpt of what the link looks like --> https://youtu.be/jUzxY3rgbkI
	};

	const youtubeId = extractAndCopyId(ytlink);

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
		const fetchVideos = async () => {
			const result = await fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${youtubeId}`, options);
			const data = await result.json();
			setReturnedData(data);
			console.log(returnedData);
		};

		fetchVideos();
	}, [youtubeId]);

	const gridItems = [
		{
			icon: <Icon icon="uil:link" />,
			text: "1. on the youtube copy the address(URL) of the video you want to download. if you are in the youtube app , tap on the share button and the select Copy Link",
		},
		{
			icon: <Icon icon="fluent:notepad-32-filled" />,
			text: "2. go back to this page and paste the copied url into the address field on the top of this page and then click on the Download button",
		},
		{
			icon: <Icon icon="ph:download-fill" />,
			text: "3. now the list of video or audio files will be displayed in different qualities that you can select the desired quality and download the video or audio",
		},
	];

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
			<Container>
				<GridTitleContainer>
					<GridTitle>How to download youtube videos ?</GridTitle>
				</GridTitleContainer>
				<GridContainerInner>
					{gridItems.map((item, index) => {
						const { text, icon } = item;
						return (
							<GridItem key={index}>
								<IconContainer>{icon}</IconContainer>
								<TextContainer>{text}</TextContainer>
							</GridItem>
						);
					})}
				</GridContainerInner>
			</Container>
		</PageContainer>
	);
};

export default DownloadVideos;
