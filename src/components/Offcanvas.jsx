import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { IconLogo, MenuToggler, YoutubeLogo } from "../assets/css/HeaderNavbarStyles";
import { OffcanvasContainer, OffCanvasHeader } from "../assets/css/OffcanvasStyles";
import YoutubeLogoImage from "../assets/images/youtube-image.jpg";

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
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis consequuntur. Amet cupiditate minima sint, dolor repudiandae
			reiciendis esse soluta, ea veniam quia rem dolores accusantium facilis delectus a repellendus!
		</OffcanvasContainer>
	);
};

export default Offcanvas;
