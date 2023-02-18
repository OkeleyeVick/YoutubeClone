import React from "react";
import { Details, EachGridItem, GridWrapper, Image, ImageContainer } from "../assets/css/IndexPageStyles";
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
		profile_image: "image1.webp",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "Listening to TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profile_image: "image1.webp",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "Listening to TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profile_image: "image1.webp",
	},
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "Listening to TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profile_image: "image1.webp",
	},
];
const IndexPage = () => {
	return (
		<GridWrapper>
			{images.map((eachItem, index) => {
				const { image, imageTitle, views, duration, profile_image, pathname } = eachItem;
				return (
					<EachGridItem key={index} to={pathname}>
						<ImageContainer>
							<Image src={image} />
							<span>Yes</span>
						</ImageContainer>
						<Details></Details>
					</EachGridItem>
				);
			})}
		</GridWrapper>
	);
};

export default IndexPage;
