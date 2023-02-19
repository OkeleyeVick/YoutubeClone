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
import { AllPageLinks } from "./Objects";
import Offcanvas from "./Offcanvas";

const HeaderSideBar = () => {
	const { setSideBarWidth } = useContext(SideBarContext);

	return (
		<SideBarContainer>
			<Offcanvas />
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
											<Em>{isActive ? IconActive : Icon}</Em>
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
