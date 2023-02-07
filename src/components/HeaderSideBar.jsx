import { Icon } from "@iconify/react";
import React from "react";
import { Em, LinkText, MenuToggler, PageLinkContainer, SideBarContainer, SideBarLink } from "../assets/css/HeaderSideBarStyles";

const AllPageLinks = [
	{
		path: "/",
		linkname: "Home",
		Icon: <Icon icon="ci:home-fill" />,
		IconActive: <Icon icon="teenyicons:home-outline" />,
	},
	{
		path: "shorts",
		linkname: "Shorts",
		Icon: <Icon icon="clarity:video-gallery-line" />,
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
		Icon: <Icon icon="ion:videocam-outline" />,
		IconActive: <Icon icon="ion:videocam" />,
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
					const { path, linkname, Icon, IconActive } = link;
					return (
						<SideBarLink to={path} key={index}>
							{({ isActive }) => (isActive ? <Em>{IconActive}</Em> : <Em>{Icon}</Em>)}
							<LinkText>{linkname}</LinkText>
						</SideBarLink>
					);
				})}
			</PageLinkContainer>
		</SideBarContainer>
	);
};

export default HeaderSideBar;
