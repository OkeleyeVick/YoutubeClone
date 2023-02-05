import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Icon_et_logo, MenuToggler, YoutubeLogo } from "../assets/css/Styles";
import youtubeSvg from "../assets/images/random-logo.svg";

const linkstyle = {
	display: "flex",
	alignItems: "center",
	textDecoration: "none",
};

function Navbar() {
	return (
		<div>
			<nav>
				<Icon_et_logo>
					<MenuToggler>
						<Icon icon="codicon:menu" />
					</MenuToggler>
					<Link to="/" style={linkstyle}>
						<YoutubeLogo src={youtubeSvg} />
						<small>
							<sup>NG</sup>
						</small>
					</Link>
				</Icon_et_logo>
			</nav>
		</div>
	);
}

export default Navbar;
