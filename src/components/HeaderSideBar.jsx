import { Icon } from "@iconify/react";
import React from "react";
import { Em, LinkText, MenuToggler, PageLinkContainer, SideBarContainer, SideBarLink } from "../assets/css/HeaderSideBarStyles";

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
		Icon: <Icon icon="mdi:play-box-multiple-outline" />,
		IconActive: <Icon icon="mdi:play-box-multiple" />,
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
							{({ isActive }) => (
								<>
									<Em checkActive={isActive}>{isActive ? IconActive : Icon}</Em>
									<LinkText>{linkname}</LinkText>
								</>
							)}
						</SideBarLink>
					);
				})}
			</PageLinkContainer>
		</SideBarContainer>
	);
};

export default HeaderSideBar;
