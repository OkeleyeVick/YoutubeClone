import { Icon } from "@iconify/react";
import React, { useState } from "react";
import {
	ChannelName,
	Details,
	DetailsInner,
	DropdownMenuContainer,
	DropdownToggler,
	EachGridItem,
	Em,
	GridWrapper,
	Image,
	ImageContainer,
	ImageContainerInner,
	LinkItem,
	MenuDropdown,
	ProfileIcon,
	Title,
	ViewAndTime,
} from "../assets/css/IndexPageStyles";
import { images, MenuItems } from "./Objects";

const IndexPage = () => {
	const [dropdownOpen, setDropdown] = useState(false);

	const handleDropdown = (i) => {
		setDropdown((drop) => !drop);
	};

	return (
		<GridWrapper>
			{images.map((eachItem, index) => {
				const { image, imageTitle, views, duration, pathname, profileImage, title } = eachItem;
				return (
					<EachGridItem key={index}>
						<ImageContainer to={pathname}>
							<ImageContainerInner>
								<Image src={image} />
								<span>6:05</span>
							</ImageContainerInner>
						</ImageContainer>
						<Details>
							<ProfileIcon src={profileImage} />
							<DetailsInner>
								<Title to={pathname}>{title}</Title>
								<ChannelName>{imageTitle}</ChannelName>
								<ViewAndTime>
									<small>{views} views</small>
									<small>&#x2022;</small>
									<small>{duration}</small>
								</ViewAndTime>
							</DetailsInner>
							<MenuDropdown>
								<DropdownToggler onClick={() => handleDropdown(index)}>
									<Icon icon="carbon:overflow-menu-vertical" />
								</DropdownToggler>
								<DropdownMenuContainer>
									{MenuItems.map((menu, index) => {
										const { icon, linkname } = menu;
										return (
											<LinkItem to="/" key={index}>
												<Em>{icon}</Em>
												<span>{linkname}</span>
											</LinkItem>
										);
									})}
								</DropdownMenuContainer>
								{/* {dropdownOpen ? (
									
								) : (
									""
								)} */}
							</MenuDropdown>
						</Details>
					</EachGridItem>
				);
			})}
		</GridWrapper>
	);
};

export default IndexPage;
