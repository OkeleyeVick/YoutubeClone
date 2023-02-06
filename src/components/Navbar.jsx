import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import {
	AvatarWrapper,
	AvaterContainer,
	BellIconWrapper,
	Dropdown,
	Em,
	Icon_et_logo,
	MenuToggler,
	MicroPhone,
	Nav,
	RightIcons,
	SearchButton,
	SearchInput,
	SearchWrapper,
	VideoIconWrapper,
	YoutubeLogo,
} from "../assets/css/Styles";
import youtubeSvg from "../assets/images/random-logo.svg";
import AvatarImage from "../assets/images/vickkk.jpg";

const linkstyle = {
	display: "flex",
	alignItems: "center",
	textDecoration: "none",
};

function Navbar() {
	return (
		<div>
			<Nav>
				<Icon_et_logo>
					<MenuToggler>
						<Icon icon="bytesize:menu" />
					</MenuToggler>
					<Link to="/" style={linkstyle}>
						<YoutubeLogo src={youtubeSvg} />
						<small>
							<sup>NG</sup>
						</small>
					</Link>
				</Icon_et_logo>
				<SearchWrapper>
					<div className="innerSearchWrapper" style={{ position: "relative" }}>
						<div style={linkstyle}>
							<SearchInput type="search" placeholder="search" />
							<SearchButton>
								<Icon icon="ion:search-outline" />
							</SearchButton>
						</div>
						<Em>
							<Icon icon="ion:search-outline" />
						</Em>
					</div>
					<div>
						<MicroPhone>
							<Icon icon="ph:microphone-light" />
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
						<Icon icon="clarity:notification-line" />
						<Dropdown>
							<small>Notification</small>
						</Dropdown>
					</BellIconWrapper>
					<AvaterContainer>
						<AvatarWrapper src={AvatarImage} />
					</AvaterContainer>
				</RightIcons>
			</Nav>
		</div>
	);
}

export default Navbar;
