import { Icon } from "@iconify/react";
import React from "react";
import {
	ContentCont,
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
					<ContentCont>
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
					</ContentCont>

					<ContentCont>
						<Header>
							<Left>
								<Em>
									<Icon icon="ph:scissors-light" />
								</Em>
								<span>Your Clips</span>
							</Left>
							<Right>
								<L to="/">See all</L>
							</Right>
						</Header>
					</ContentCont>
					<ContentCont>
						<Header>
							<Left>
								<Em>
									<Icon icon="ph:scissors-light" />
								</Em>
								<span>Your Clips</span>
							</Left>
							<Right>
								<L to="/">See all</L>
							</Right>
						</Header>
					</ContentCont>
				</LargeContainer>
				<SmallContainer>
					<ImageCont>
						<Image src={jpeg} />
					</ImageCont>
					<LinerContainer>
						<Liner>
							<small>Subscription</small>
							<small>0</small>
						</Liner>
						<Liner>
							<small>Uploads</small>
							<small>0</small>
						</Liner>
						<Liner>
							<small>Likes</small>
							<small>0</small>
						</Liner>
					</LinerContainer>
				</SmallContainer>
			</ParentContainer>
			{/* <h1>
				<Icon icon="ion:time-outline" />
			</h1> */}
		</>
	);
};

export default Librarypage;
