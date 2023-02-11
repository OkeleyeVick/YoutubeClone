import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { IconLogo, MenuToggler, YoutubeLogo } from "../assets/css/HeaderNavbarStyles";
import { OffCanvasBody, OffcanvasContainer, OffCanvasHeader, OffcanvasItem, OffCanvasItemsContainer } from "../assets/css/OffcanvasStyles";
import YoutubeLogoImage from "../assets/images/youtube-image.jpg";

const offcanvasContainers = [
	{
		id: 0,
		text: "kaofgafqpefjegiewas",
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
					console.log(container);
					const { id, linkItem, text } = container;
					<OffCanvasItemsContainer key={index}>
						{text}
						{linkItem.forEach((link) => {
							console.log(link);

							const { icon, linkname } = link;
							<OffcanvasItem key={id}>
								<div>{icon}</div>
								<span>{linkname}</span>
							</OffcanvasItem>;
						})}
					</OffCanvasItemsContainer>;
				})}
			</OffCanvasBody>
		</OffcanvasContainer>
	);
};

export default Offcanvas;
