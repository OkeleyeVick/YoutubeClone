import { Icon } from "@iconify/react";
import React from "react";
import {
	Em,
	Header,
	Image,
	ImageCont,
	L,
	LargeContainer,
	Left,
	Liner,
	LinerContainer,
	ParentContainer,
	Right,
	SmallContainer,
} from "../assets/css/LibraryStyles";
import jpeg from "../assets/images/image1.webp";

const Librarypage = () => {
	return (
		<>
			<ParentContainer>
				<LargeContainer>
					<Header>
						<Left>
							<Em>
								<Icon icon="cil:history" />
							</Em>
							<span>History</span>
						</Left>
						<Right>
							<L to="/">See all</L>
						</Right>
					</Header>
				</LargeContainer>
				<SmallContainer>
					<ImageCont>
						<Image src={jpeg} />
					</ImageCont>
					<LinerContainer>
						<Liner></Liner>
					</LinerContainer>
				</SmallContainer>
			</ParentContainer>
			<h1>
				<Icon icon="ph:scissors-light" />
				<Icon icon="ion:time-outline" />
			</h1>
		</>
	);
};

export default Librarypage;
