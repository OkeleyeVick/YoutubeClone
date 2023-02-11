import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { IconLogo, MenuToggler, YoutubeLogo } from "../assets/css/HeaderNavbarStyles";
import { OffCanvasBody, OffcanvasContainer, OffCanvasHeader } from "../assets/css/OffcanvasStyles";
import YoutubeLogoImage from "../assets/images/youtube-image.jpg";

const offcanvasContainers = [
	{
		id: 0,
		linkItem: [
			{
				icon: "y",
				linkname: "name",
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
					const { id, linkItem } = container;
				})}
			</OffCanvasBody>
		</OffcanvasContainer>
	);
};

export default Offcanvas;
