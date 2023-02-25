import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
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
import { gridItems } from "./Objects";

const DownloadVideos = () => {
	const inputRef = useRef(null);
	const youtubeIdRef = useRef();

	const [returnedData, setReturnedData] = useState("");

	const extractAndCopyId = (youtubeLink) => {
		const youtubeLinkId = youtubeLink.split(".be/")[1];
		return youtubeLinkId;
		// excerpt of what the link looks like --> https://youtu.be/jUzxY3rgbkI
	};

	function handleSubmit(e) {
		console.log(e.target);
		e.preventDefault();
		const id = extractAndCopyId(inputRef.current.value);
		youtubeIdRef.current = id;
		console.log("I was clicked", youtubeIdRef);
	}

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

		const fetchVideos = () => {
			fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${youtubeIdRef.current}`, options)
				.then((response) => response.json())
				.then((data) => {
					setReturnedData(data);
					console.log(data);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		fetchVideos();

		return () => controller.abort();
	}, []);

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
								<FormInput ref={inputRef} />
								<Sumbit type="submit" onClick={handleSubmit}>
									Download
								</Sumbit>
							</FormInputContainer>
						</FormMainContainer>
					</form>
					<ResultContainer>
						<ResultHeader>
							<ResultImage>
								<Image src={FakeImage} />
							</ResultImage>
							<ContentContainer>
								<Title>Will Smith's Life Advice Will Change You - One of the Greatest Speeches Ever | Will Smith Motivation</Title>
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
