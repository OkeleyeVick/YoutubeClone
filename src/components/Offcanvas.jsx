import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SideBarContext } from "../App";
import { IconLogo, MenuToggler, YoutubeLogo } from "../assets/css/HeaderNavbarStyles";
import { offcanvasContainers } from "./Objects";
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

const Offcanvas = () => {
	const { sideBarOpen, setSideBarWidth } = useContext(SideBarContext);

	return (
		<OffcanvasContainer style={sideBarOpen ? { width: "260px", left: "0" } : { width: "0", left: "-5rem" }}>
			<OffCanvasHeader>
				<MenuToggler
					onClick={(e) => {
						e.stopPropagation();
						return setSideBarWidth((p) => !p);
					}}>
					<Icon icon="bytesize:menu" />
				</MenuToggler>
				<IconLogo>
					<Link to="/" style={{ position: "relative" }}>
						<YoutubeLogo src={YoutubeLogoImage} />
						<sup>
							<small>NG</small>
						</sup>
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
									<OffcanvasItem key={linkname}>
										<OffcanvasLink
											to={pathname}
											onClick={() => {
												setSideBarWidth((p) => !p);
											}}>
											{({ isActive }) => (
												<>
													{isActive ? (
														<>
															<Em>{IconActive}</Em>
															<LinkNameActive>{linkname}</LinkNameActive>
														</>
													) : (
														<>
															<Em>{Icon}</Em>
															<LinkNameNotActive>{linkname}</LinkNameNotActive>
														</>
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
