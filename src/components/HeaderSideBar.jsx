import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { SideBarContext } from "../App";
import {
	Em,
	LinkText,
	MenuToggler,
	PageLinkContainer,
	SideBarContainer,
	SideBarContainerInner,
	SideBarLink,
} from "../assets/css/HeaderSideBarStyles";
import Offcanvas from "./Offcanvas";

const AllPageLinks = [
	{
		path: "/",
		linkname: "Home",
		Icon: <Icon icon="ph:house" />,
		IconActive: <Icon icon="ph:house-fill" />,
	},
	{
		path: "shorts",
		linkname: "Shorts",
		Icon: <Icon icon="clarity:video-gallery-line" />,
		IconActive: <Icon icon="clarity:video-gallery-solid" />,
	},
	{
		path: "subscriptions",
		linkname: "Subscriptions",
		Icon: <Icon icon="teenyicons:money-stack-outline" />,
		IconActive: <Icon icon="teenyicons:money-stack-solid" />,
	},
	{
		path: "library",
		linkname: "Library",
		Icon: <Icon icon="fluent:library-20-regular" />,
		IconActive: <Icon icon="fluent:library-20-filled" />,
	},
	{
		path: "download",
		linkname: "Download Videos",
		Icon: <Icon icon="ph:download" />,
		IconActive: <Icon icon="ph:download-fill" />,
	},
];

const HeaderSideBar = () => {
	const { sideBarOpen, setSideBarWidth } = useContext(SideBarContext);

	return (
		<SideBarContainer>
			<Offcanvas isOpen={sideBarOpen} style={!sideBarOpen ? { width: "320px" } : { width: "30px" }} />
			<SideBarContainerInner>
				<MenuToggler
					onClick={(e) => {
						e.stopPropagation();
						return setSideBarWidth((p) => !p);
					}}>
					<Icon icon="bytesize:menu" />
				</MenuToggler>
				<PageLinkContainer>
					{AllPageLinks.map((link, index) => {
						const { path, linkname, Icon, IconActive } = link;
						return (
							<SideBarLink to={path} key={index}>
								{({ isActive }) => {
									return (
										<>
											<Em checkActive={isActive}>{isActive ? IconActive : Icon}</Em>
											<LinkText>{linkname}</LinkText>
										</>
									);
								}}
							</SideBarLink>
						);
					})}
				</PageLinkContainer>
			</SideBarContainerInner>
		</SideBarContainer>
	);
};

export default HeaderSideBar;
