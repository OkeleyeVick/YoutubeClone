import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { IconLogo, MenuToggler, YoutubeLogo } from "../assets/css/HeaderNavbarStyles";

import {
	Em,
	LinkNameActive,
	LinkNameNotActive,
	OffCanvasBody,
	OffcanvasContainer,
	OffCanvasHeader,
	OffcanvasItem,
	OffCanvasItemsContainer,
	OffcanvasLink,
} from "../assets/css/OffcanvasStyles";
import YoutubeLogoImage from "../assets/images/youtube-image.jpg";

const offcanvasContainers = [
	{
		linkItem: [
			{
				pathname: "/",
				linkname: "Home",
				Icon: <Icon icon="ph:house" />,
				IconActive: <Icon icon="ph:house-fill" />,
			},
			{
				pathname: "shorts",
				linkname: "Shorts",
				Icon: <Icon icon="ph:house" />,
				IconActive: <Icon icon="ph:house-fill" />,
			},
			{
				pathname: "subscriptions",
				linkname: "Subscription",
				Icon: <Icon icon="clarity:video-gallery-line" />,
				IconActive: <Icon icon="clarity:video-gallery-solid" />,
			},
		],
	},
	{
		linkItem: [
			{
				pathname: "library",
				linkname: "Library",
				Icon: <Icon icon="material-symbols:video-library-outline" />,
				IconActive: <Icon icon="material-symbols:video-library" />,
			},
			{
				pathname: "history",
				linkname: "History",
				Icon: <Icon icon="octicon:history-24" />,
				IconActive: <Icon icon="octicon:history-16" />,
			},
			{
				pathname: "Watch later",
				linkname: "Watch later",
				Icon: <Icon icon="bi:clock" />,
				IconActive: <Icon icon="bi:clock-fill" />,
			},
			{
				pathname: "liked-videos",
				linkname: "Liked Videos",
				Icon: <Icon icon="material-symbols:thumb-up-outline" />,
				IconActive: <Icon icon="material-symbols:thumb-up" />,
			},
		],
	},
	{
		linkItem: [
			{
				pathname: "subscriptions",
				linkname: "Subscription",
				Icon: <Icon icon="ph:house" />,
				IconActive: <Icon icon="ph:house-fill" />,
			},
		],
	},
];

const Offcanvas = () => {
	return (
		<OffcanvasContainer>
			<OffCanvasHeader>
				<MenuToggler>
					<Icon icon="bytesize:menu" />
				</MenuToggler>
				<IconLogo>
					<Link to="/">
						<YoutubeLogo src={YoutubeLogoImage} />
						<small>
							<sup>NG</sup>
						</small>
					</Link>
				</IconLogo>
			</OffCanvasHeader>
			<OffCanvasBody>
				{offcanvasContainers.map((container, index) => {
					let { linkItem } = container;
					return (
						<OffCanvasItemsContainer key={index}>
							{linkItem.map((link) => {
								const { Icon, linkname, IconActive, pathname } = link;
								return (
									<OffcanvasItem key={Math.floor(Math.random() * 1000)}>
										<OffcanvasLink to={pathname}>
											{({ isActive }) => (
												<>
													<Em>{isActive ? IconActive : Icon}</Em>
													{isActive ? (
														<LinkNameActive>{linkname}</LinkNameActive>
													) : (
														<LinkNameNotActive>{linkname}</LinkNameNotActive>
													)}
												</>
											)}
										</OffcanvasLink>
									</OffcanvasItem>
								);
							})}
						</OffCanvasItemsContainer>
					);
				})}
			</OffCanvasBody>
		</OffcanvasContainer>
	);
};

export default Offcanvas;
