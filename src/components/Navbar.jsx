import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Em, Icon_et_logo, MenuToggler, MicroPhone, Nav, SearchInput, SearchWrapper, YoutubeLogo } from "../assets/css/Styles";
import youtubeSvg from "../assets/images/random-logo.svg";

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
						<SearchInput type="search" placeholder="search" />
						<Em>
							<Icon icon="ion:search-outline" />
						</Em>
					</div>
					<div>
						<MicroPhone>
							<Icon icon="ph:microphone-light" />
						</MicroPhone>
					</div>
				</SearchWrapper>
			</Nav>
		</div>
	);
}

export default Navbar;
