import { Icon } from "@iconify/react";
import React from "react";
import {
	ChannelName,
	Details,
	DetailsInner,
	DropdownToggler,
	EachGridItem,
	GridWrapper,
	Image,
	ImageContainer,
	MenuDropdown,
	ProfileIcon,
	Title,
} from "../assets/css/IndexPageStyles";
import ImageOne from "../assets/images/image1.webp";
import ImageTwo from "../assets/images/image1.webp";
import ImageThree from "../assets/images/image1.webp";
import ImageFour from "../assets/images/image1.webp";
import ImageFive from "../assets/images/image1.webp";

const images = [
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageOne,
		title: "Get Inspired From Ted Talks and start working on your skill today	",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageTwo,
		title: "Get Inspired From Ted Talks and start working on your skill today	",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageThree,
		title: "Get Inspired From Ted Talks and start working on your skill today	",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "TED Motivation",
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
								<ChannelName>{imageTitle}</ChannelName>
							</DetailsInner>
							<MenuDropdown>
								<DropdownToggler>
									<Icon icon="carbon:overflow-menu-vertical" />
								</DropdownToggler>
							</MenuDropdown>
						</Details>
					</EachGridItem>
				);
			})}
		</GridWrapper>
	);
};

export default IndexPage;
