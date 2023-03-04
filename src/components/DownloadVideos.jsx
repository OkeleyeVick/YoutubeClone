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
	data: null,
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
			if (currentState.youtubeId === null || currentState.youtubeId === undefined) {
				return;
			}
			const response = await fetch(api_url, options);
			if (!response.ok) doAction({ type: setError, error: response.status });
			const data = await response.json();

			console.log(data);
			const { length, title, thumb, view_count, link, description } = data;

			let objectArray = [];
			if (data) {
				for (const array in link) {
					let object = {};
					const item = link[array];
					const [url, fileSize, format] = [item[0], item[1], item[3]];
					object["url"] = url;
					object["fileSize"] = fileSize;
					object["format"] = format;

					objectArray.push(object);
				}
			}
			const formats = ["144p", "240p", "360p", "480p", "720p", "1080p"];

			let arrayOne = [],
				arrayTwo = [];
			formats.forEach((video_format) => {
				const filterArray = objectArray.filter((object) => {
					const { format } = object;
					return format === video_format;
				});
				arrayOne.push(filterArray);
			});

			const filteredEmptyArray = arrayOne.filter((array) => {
				return array.length !== 0;
			});
			filteredEmptyArray.forEach((array) => {
				arrayTwo.push(array[0]);
			});

			doAction({ type: setData, data: { length, title, thumb, view_count, formats: arrayTwo, description } });
		};

		fetchVideos();

		return () => controller.abort();
	}, [currentState.youtubeId]);

	if (currentState.data === null) {
		return (
			<PageContainer>
				<FormOuterContainer>
					<FormTitleContainer>
						<FormTitle>Enter Youtube link</FormTitle>
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
	} else {
		const { length, title, thumb, view_count, formats, description } = currentState.data;
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
				<ResultContainer>
					<ResultHeader>
						<ResultImage>
							<Image src={thumb} />
						</ResultImage>
						<ContentContainer>
							<Title>{title}</Title>
							<span>Duration: {length}</span>
							<span>Views: {view_count}</span>
							<small>{description}</small>
						</ContentContainer>
					</ResultHeader>
					<MimeType>
						<h3>Video</h3>
					</MimeType>
					<ResultTableHeader>
						<HeadTitle>Quality</HeadTitle>
						<HeadTitle willChange>Type</HeadTitle>
						<HeadTitle>File size</HeadTitle>
						<HeadTitle>Download</HeadTitle>
					</ResultTableHeader>
					<ResultTableBody>
						{formats.map((item, index) => {
							const { fileSize, format, url } = item;
							return (
								<ResultTableBodyInner key={index}>
									<Quality>{format}</Quality>
									<Type willChange>mp4</Type>
									<FileSize>{fileSize !== "" ? fileSize : "-"}</FileSize>
									<DownloadLink to={url} download={title} target="_blank">
										<Em>
											<Icon icon="ph:download-simple-light" />
										</Em>
										<span>Download</span>
									</DownloadLink>
								</ResultTableBodyInner>
							);
						})}
					</ResultTableBody>
				</ResultContainer>
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
	}
};

export default DownloadVideos;
