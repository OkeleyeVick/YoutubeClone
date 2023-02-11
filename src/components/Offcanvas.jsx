import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { IconLogo, MenuToggler, YoutubeLogo } from "../assets/css/HeaderNavbarStyles";

import {
	Em,
	LinkName,
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
		id: 0,
		linkItem: [
			{
				id: 0,
				linkname: "Home",
				Icon: <Icon icon="ph:house" />,
				IconActive: <Icon icon="ph:house-fill" />,
			},
		],
	},
	{
		linkItem: [
			{
				linkname: "Home",
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
								const { Icon, linkname, IconActive, id } = link;
								return (
									<OffcanvasItem key={`v-${id}`}>
										<OffcanvasLink to="/">
											{({ isActive }) => (
												<>
													<Em>{isActive ? IconActive : Icon}</Em>
													<LinkName>{linkname}</LinkName>
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
