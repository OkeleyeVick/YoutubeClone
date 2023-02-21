import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import {
	AvatarDropdown,
	AvatarWrapper,
	AvaterContainer,
	AvaterInner,
	BellIconWrapper,
	Dropdown,
	EachContainer,
	EachContainerLink,
	Em,
	IconLogo,
	MicroPhone,
	Nav,
	Pill,
	ProfileContainer,
	RightIcons,
	SearchButton,
	SearchInput,
	SearchWrapper,
	Span,
	VideoIconWrapper,
	YoutubeLogo,
} from "../assets/css/HeaderNavbarStyles";
import youtubeSvg from "../assets/images/youtube-image.jpg";
import AvatarImage from "../assets/images/vickkk.jpg";
import "@splidejs/react-splide/css/core";
import { NavbarContext } from "../App";
import { useContext } from "react";
import { profileDropdown } from "./Objects";

const linkstyle = {
	display: "flex",
	alignItems: "center",
	position: "relative",
	textDecoration: "none",
};

const Navbar = () => {
	const { dropdown, setDropdown } = useContext(NavbarContext);
	function handleDropdown() {
		setDropdown(!dropdown);
	}

	return (
		<div>
			<Nav>
				<div>
					<IconLogo>
						<Link to="/" style={linkstyle}>
							<YoutubeLogo src={youtubeSvg} />
							<small>
								<sup>NG</sup>
							</small>
						</Link>
					</IconLogo>
					<SearchWrapper>
						<div className="innerSearchWrapper" style={{ position: "relative" }}>
							<div style={linkstyle}>
								<SearchInput type="search" placeholder="Search" />
								<SearchButton>
									<Icon icon="ion:search-outline" />
									<Dropdown>
										<small>Search </small>
									</Dropdown>
								</SearchButton>
							</div>
							<Em>
								<Icon icon="ion:search-outline" />
							</Em>
						</div>
						<div>
							<MicroPhone>
								<Icon icon="heroicons:microphone" />
								<Dropdown>
									<small>Search with your voice</small>
								</Dropdown>
							</MicroPhone>
						</div>
					</SearchWrapper>
					<RightIcons>
						<VideoIconWrapper>
							<Icon icon="carbon:video-add" />
							<Dropdown>
								<small>Create</small>
							</Dropdown>
						</VideoIconWrapper>
						<BellIconWrapper>
							<Icon icon="uiw:bell" />
							<Dropdown>
								<small>Notification</small>
							</Dropdown>
						</BellIconWrapper>
						<AvaterContainer>
							<AvaterInner to="#" onClick={handleDropdown}>
								<AvatarWrapper src={AvatarImage} />
							</AvaterInner>
							<AvatarDropdown>
								<EachContainer>
									<AvatarWrapper src={AvatarImage} />
									<Span>
										<span>Okeleye Victor</span>
										<small>justusofnigeria@gmail.com</small>
										<Link to="/">Manage your Google Account</Link>
									</Span>
								</EachContainer>
								{profileDropdown.map((container, index) => {
									const { listItem } = container;
									return (
										<EachContainer key={index} flexCol>
											{listItem.map((item, i) => {
												const { icon, pathname } = item;
												return (
													<EachContainerLink to="/" key={i}>
														<em>{icon}</em>
														<Span>{pathname}</Span>
													</EachContainerLink>
												);
											})}
										</EachContainer>
									);
								})}
							</AvatarDropdown>
						</AvaterContainer>
					</RightIcons>
				</div>
			</Nav>
		</div>
	);
};

export default Navbar;
