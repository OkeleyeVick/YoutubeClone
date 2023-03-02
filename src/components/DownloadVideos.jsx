import { Icon } from "@iconify/react";
import React, { useEffect, useReducer, useRef } from "react";
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
	ResultTableBodyInner,
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

const extractAndCopyId = (youtubeLink) => {
	const youtubeLinkId = youtubeLink.split(".be/")[1];
	return youtubeLinkId;
};

const global = {
	setError: "setError",
	setData: "setData",
	setId: "setYoutubeId",
};

const initialState = {
	youtubeId: null,
	data: {},
	error: null,
};

const { setError, setData, setId } = global;

const reducerFunc = (state, action) => {
	switch (action.type) {
		case setData:
			return {
				...state,
				data: action.data,
				error: null,
			};

		case setError:
			return {
				...state,
				data: null,
				error: action.error,
			};

		case setId:
			return {
				...state,
				youtubeId: action.id,
				error: null,
			};

		default:
			return state;
	}
};

function videosWithSingleFormat(linkOfFormats) {
	linkOfFormats.forEach((link) => {
		console.log(link);
	});
}

function formatTime(timeInSeconds) {
	const totalSeconds = Math.round(timeInSeconds);
	const hours = Math?.floor(totalSeconds / 3600);
	const minutes = Math?.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	return `${hours}:${minutes}:${seconds}`.toString();
}

const DownloadVideos = () => {
	const inputRef = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		const id = extractAndCopyId(inputRef.current.value);
		doAction({ type: setId, id });
	}

	const [currentState, doAction] = useReducer(reducerFunc, initialState);

	useEffect(() => {
		const controller = new AbortController();

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "6473c3ce7dmsh28c8afd093343dep1d0f1fjsn02e8bc02b53a",
				"X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
			},
			signal: controller.signal,
		};

		const api_url = `https://youtube-video-download-info.p.rapidapi.com/dl?id=${currentState.youtubeId}`;
		const fetchVideos = async () => {
			if (currentState.youtubeId !== null) {
				const response = await fetch(api_url, options);
				if (!response.ok) doAction({ type: setError, error: response.status });
				const data = await response.json();
				doAction({ type: setData, data });
			}
			return;
		};

		fetchVideos();

		return () => controller.abort();
	}, [currentState.youtubeId]);

	console.log(currentState.data);

	let finalResult;
	if (currentState.data) {
		const { length, title, thumb, view_count, link } = currentState.data;

		const formats = videosWithSingleFormat(link);
		// finalResult = (
		// 	<ResultContainer>
		// 		<ResultHeader>
		// 			<ResultImage>
		// 				<Image src={imagePreview} />
		// 			</ResultImage>
		// 			<ContentContainer>
		// 				<Title>{title}</Title>
		// 				<span>Duration: {videoLength}</span>
		// 				<span>Views: {viewCount}</span>
		// 			</ContentContainer>
		// 		</ResultHeader>
		// 		<MimeType>
		// 			<h3>Video</h3>
		// 		</MimeType>
		// 		<ResultTableHeader>
		// 			<HeadTitle>Quality</HeadTitle>
		// 			<HeadTitle>Type</HeadTitle>
		// 			<HeadTitle willChange>File size</HeadTitle>
		// 			<HeadTitle>Download</HeadTitle>
		// 		</ResultTableHeader>
		// 		<ResultTableBody>
		// 			{formats.map((format, index) => {
		// 				const { bitrate, qualityLabel, url } = format;
		// 				const fileSize = convertToMb(bitrate);
		// 				return (
		// 					<ResultTableBodyInner key={index}>
		// 						<Quality>{qualityLabel}</Quality>
		// 						<Type>mp4</Type>
		// 						<FileSize willChange>{fileSize}MB</FileSize>
		// 						<DownloadLink to={url} target="_blank" download={title}>
		// 							<Em>
		// 								<Icon icon="ph:download-simple-light" />
		// 							</Em>
		// 							<span>Download</span>
		// 						</DownloadLink>
		// 					</ResultTableBodyInner>
		// 				);
		// 			})}
		// 		</ResultTableBody>
		// 	</ResultContainer>
		// );
	}
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
				</FormMainContainer>
			</FormOuterContainer>
			{/* {finalResult} */}
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
