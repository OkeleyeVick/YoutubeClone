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

const DownloadVideos = () => {
	const { setError, setData, setId } = global;

	const inputRef = useRef(null);

	const reducerFunc = (state, action) => {
		switch (action.type) {
			case setData:
				return {
					...state,
					data: action.data,
				};

			case setError:
				return {
					...state,
					data: {},
					error: action.error,
				};

			case setId:
				return {
					...state,
					youtubeId: action.id,
				};

			default:
				throw Error("Cannot fetch data");
		}
	};

	function handleSubmit(e) {
		e.preventDefault();
		const id = extractAndCopyId(inputRef.current.value);
		doAction({ type: setId, id });
	}

	const [currentState, doAction] = useReducer(reducerFunc, initialState);

	useEffect(() => {
		// https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${youtubeIdRef.current} //!50 per day
		// "X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com", //! 50 per day
		// const controller = new AbortController();

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "6473c3ce7dmsh28c8afd093343dep1d0f1fjsn02e8bc02b53a",
				"X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
			},
			// signal: controller.signal,
		};

		const api_url = `https://youtube-media-downloadWer.p.rapidapi.com/v2/video/details?videoId=${currentState.youtubeId}`;
		const fetchVideos = async () => {
			const response = await fetch(api_url, options);
			if (!response.ok) doAction({ type: setError, error: response.status });
			const data = await response.json();
			doAction({ type: setData, data });
		};

		fetchVideos();

		// return () => controller.abort();
	}, [currentState.youtubeId, setData, setId, setError]);

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
