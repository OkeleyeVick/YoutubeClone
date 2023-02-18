import React from "react";
import { Details, DetailsInner, EachGridItem, GridWrapper, Image, ImageContainer, ProfileIcon, Title } from "../assets/css/IndexPageStyles";
import ImageOne from "../assets/images/image1.webp";
import ImageTwo from "../assets/images/image1.webp";
import ImageThree from "../assets/images/image1.webp";
import ImageFour from "../assets/images/image1.webp";
import ImageFive from "../assets/images/image1.webp";

const images = [
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "Listening to TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageOne,
		title: "Get Inspired From Ted Talks and start working on your skill today	",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "Listening to TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageTwo,
		title: "Get Inspired From Ted Talks and start working on your skill today	",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "Listening to TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageThree,
		title: "Get Inspired From Ted Talks and start working on your skill today	",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "Listening to TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageFour,
		title: "Get Inspired From Ted Talks and start working on your skill today	",
	},
];
const IndexPage = () => {
	return (
		<GridWrapper>
			{images.map((eachItem, index) => {
				const { image, imageTitle, views, duration, pathname, profileImage, title } = eachItem;
				return (
					<EachGridItem key={index} to={pathname}>
						<ImageContainer>
							<Image src={image} />
							<span>6: 05</span>
						</ImageContainer>
						<Details>
							<ProfileIcon src={profileImage} />
							<DetailsInner>
								<Title>{title}</Title>
							</DetailsInner>
						</Details>
					</EachGridItem>
				);
			})}
		</GridWrapper>
	);
};

export default IndexPage;
