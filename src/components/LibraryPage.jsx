import { Icon } from "@iconify/react";
import React from "react";
import {
	Body,
	ContentCont,
	ContentText,
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
									<Icon icon="ion:time-outline" />
								</Em>
								<span>Watch later 1</span>
							</Left>
							<Right>
								<L to="/">See all</L>
							</Right>
						</Header>
						<Body>
							<ContentText>Playlists you create or save will show up here.</ContentText>
						</Body>
					</ContentCont>

					<ContentCont>
						<Header>
							<Left>
								<Em>
									<Icon icon="cil:thumb-up" />
								</Em>
								<span>Liked videos 2</span>
							</Left>
							<Right>
								<L to="/">See all</L>
							</Right>
						</Header>
						<Body>
							<ContentText>Playlists you create or save will show up here.</ContentText>
						</Body>
					</ContentCont>

					<ContentCont>
						<Header>
							<Left>
								<Em>
									<Icon icon="ph:scissors-light" />
								</Em>
								<span>Your clips</span>
							</Left>
							<Right>
								<L to="/">See all</L>
							</Right>
						</Header>
						<Body>
							<ContentText>Clip and share your favorite moments. Your list shows up right here.</ContentText>
						</Body>
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
		</>
	);
};

export default Librarypage;
