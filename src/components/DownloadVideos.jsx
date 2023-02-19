import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import {
	Container,
	ContentContainer,
	DownloadLink,
	FileSize,
	GridContainerInner,
	GridItem,
	GridTitle,
	GridTitleContainer,
	HeadTitle,
	IconContainer,
	Image,
	MimeType,
	Quality,
	ResultContainer,
	ResultHeader,
	ResultImage,
	ResultTableBody,
	ResultTableHeader,
	TextContainer,
	Title,
	Type,
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
import { Em } from "../assets/css/IndexPageStyles";
import FakeImage from "../assets/images/netflix.webp";

const DownloadVideos = () => {
	const [ytlink, setYtLink] = useState("");
	const [youtubeId, setYoutubeId] = useState("");
	const [returnedData, setReturnedData] = useState();

	function handleSubmit(e) {
		e.preventDefault();
		const youtubeId = extractAndCopyId(ytlink);
		setYoutubeId(youtubeId);
	}

	const extractAndCopyId = (youtubeLink) => {
		const youtubeLinkId = youtubeLink.split(".be/")[1];
		return youtubeLinkId;
		// excerpt of what the link looks like --> https://youtu.be/jUzxY3rgbkI
	};

	useEffect(() => {
		const controller = new AbortController();

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "6473c3ce7dmsh28c8afd093343dep1d0f1fjsn02e8bc02b53a",
				"X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
			},
			signal: controller.signal,
		};

		const fetchVideos = async () => {
			const result = await fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${youtubeId}`, options);
			const data = await result.json();
			setReturnedData(data);
		};

		fetchVideos();

		return () => controller.abort();
	}, [youtubeId]);

	const gridItems = [
		{
			icon: <Icon icon="uil:link" />,
			text: "1. On the youtube copy the address(URL) of the video you want to download. if you are in the youtube app , tap on the share button and the select Copy Link",
		},
		{
			icon: <Icon icon="fluent:notepad-32-filled" />,
			text: "2. Go back to this page and paste the copied url into the address field on the top of this page and then click on the Download button",
		},
		{
			icon: <Icon icon="ph:download-fill" />,
			text: "3. Now the list of video or audio files will be displayed in different qualities that you can select the desired quality and download the video or audio",
		},
	];

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
								<FormInput
									onChange={(e) => {
										setYtLink(e.target.value);
									}}
								/>
								<Sumbit onClick={handleSubmit}>Download</Sumbit>
							</FormInputContainer>
						</FormMainContainer>
					</form>
					{
						<ResultContainer>
							<ResultHeader>
								<ResultImage>
									<Image src={FakeImage} />
								</ResultImage>
								<ContentContainer>
									<Title>
										Will Smith's Life Advice Will Change You - One of the Greatest Speeches Ever | Will Smith Motivation
									</Title>
									<span>Duration: 0:10:45</span>
									<span>Views: 4,080,048</span>
								</ContentContainer>
							</ResultHeader>

							<MimeType>
								<h3>Video</h3>
							</MimeType>
							<ResultTableHeader>
								<HeadTitle>Quality</HeadTitle>
								<HeadTitle>Type</HeadTitle>
								<HeadTitle willChange>File size</HeadTitle>
								<HeadTitle>Download</HeadTitle>
							</ResultTableHeader>
							<ResultTableBody>
								<Quality>702p</Quality>
								<Type>mp4</Type>
								<FileSize willChange>-</FileSize>
								<DownloadLink to="/">
									<Em>
										<Icon icon="ph:download-simple-light" />
									</Em>
									<span>Download</span>
								</DownloadLink>
							</ResultTableBody>
						</ResultContainer>
					}
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
