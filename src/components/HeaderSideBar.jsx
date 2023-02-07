import { Icon } from "@iconify/react";
import React from "react";
import { Em, LinkText, MenuToggler, PageLinkContainer, SideBarContainer, SideBarLink } from "../assets/css/HeaderSideBarStyles";

const AllPageLinks = [
	{
		path: "/",
		linkname: "Home",
		Icon: <Icon icon="ci:home-fill" />,
	},
	{
		path: "shorts",
		linkname: "Shorts",
		Icon: <Icon icon="clarity:video-gallery-line" />,
	},
	{
		path: "/",
		linkname: "Subscriptions",
		Icon: <Icon icon="teenyicons:money-stack-outline" />,
	},
	{
		path: "/",
		linkname: "Library",
		Icon: <Icon icon="ion:videocam-outline" />,
	},
];

const HeaderSideBar = () => {
	return (
		<SideBarContainer>
			<MenuToggler>
				<Icon icon="bytesize:menu" />
			</MenuToggler>
			<PageLinkContainer>
				{AllPageLinks.map((link, index) => {
					const { path, linkname, Icon } = link;
					return (
						<SideBarLink to={path} key={index}>
							<Em>{Icon}</Em>
							<LinkText>{linkname}</LinkText>
						</SideBarLink>
					);
				})}
			</PageLinkContainer>
		</SideBarContainer>
	);
};

export default HeaderSideBar;
