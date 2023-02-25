import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import {
	Body,
	ContentCont,
	ContentText,
	Em,
	Header,
	RightImage,
	ImageCont,
	L,
	LargeContainer,
	Left,
	Liner,
	LinerContainer,
	ParentContainer,
	Right,
	SmallContainer,
	Container,
	A,
	ImageContainer,
	IconContainer,
	IconEm,
	Image,
	Duration,
	ContainerContent,
	Content,
	TriggerButton,
	Title,
	Channel,
	ChannelName,
	Verify,
} from "../assets/css/LibraryStyles";
import jpeg from "../assets/images/image1.webp";
import { LibraryItems, SubscriptionMenuItems } from "./Objects";
import { LibraryItemDropdown, LinkItem } from "../assets/css/IndexPageStyles";

const Librarypage = () => {
	const [isActive, setIsActive] = useState(false);
	const [x, setX] = useState(null);

	const DropdownRef = useRef(null);

	function handleDropdown(index) {
		setIsActive((x) => !x);
	}
	useEffect(() => {}, [isActive]);
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
								<h5>History</h5>
							</Left>
							<Right>
								<L to="/">See all</L>
							</Right>
						</Header>
						<Body hasGridItem>
							{LibraryItems.map((item, index) => {
								const { image, title, channelName, views, period_length, video_length, isVerified, path, period } = item;
								return (
									<Container key={index}>
										<A to={path}>
											<ImageContainer>
												<Image src={image} />
												<IconContainer>
													<span>
														<IconEm>
															<Icon icon="fluent:navigation-play-20-regular" />
														</IconEm>
														<small>Add to queue</small>
													</span>
													<span>
														<IconEm>
															<Icon icon="ion:time-outline" />
														</IconEm>
														<small>Watch later</small>
													</span>
												</IconContainer>
												<Duration>{video_length}</Duration>
											</ImageContainer>
										</A>
										<ContainerContent>
											<A to={path}>
												<Content>
													<Title>{title}</Title>
													<div>
														<Channel>
															<ChannelName>{channelName}</ChannelName>
															{isVerified ? (
																<Verify>
																	<Icon icon="material-symbols:check-circle" />
																</Verify>
															) : (
																""
															)}
														</Channel>
														<Channel>
															<ChannelName>{views}K views</ChannelName>
															<small>&#x2022;</small>
															<ChannelName>
																{period_length} {period} ago
															</ChannelName>
														</Channel>
													</div>
												</Content>
											</A>
											<div>
												<TriggerButton
													onClick={(e) => {
														e.preventDefault();
														handleDropdown(index);
														setX(index);
													}}>
													<Icon icon="radix-icons:dots-vertical" />
												</TriggerButton>
												{x === index ? (
													<LibraryItemDropdown isActive={isActive} ref={DropdownRef}>
														{SubscriptionMenuItems.map((menu, index) => {
															const { icon, linkname } = menu;
															return (
																<LinkItem to="/" key={index}>
																	<Em>{icon}</Em>
																	<span>{linkname}</span>
																</LinkItem>
															);
														})}
													</LibraryItemDropdown>
												) : (
													""
												)}
											</div>
										</ContainerContent>
									</Container>
								);
							})}
						</Body>
					</ContentCont>

					<ContentCont>
						<Header>
							<Left>
								<Em>
									<Icon icon="ion:time-outline" />
								</Em>
								<h5>Watch later 1</h5>
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
								<h5>Liked videos 2</h5>
							</Left>
							<Right>
								<L to="/">See all</L>
							</Right>
						</Header>
						<Body>
							<Body hasGridItem>
								{LibraryItems.slice(0, 3).map((item, index) => {
									const { image, title, channelName, views, period_length, video_length, isVerified, path, period } = item;
									return (
										<Container key={index}>
											<A to={path}>
												<ImageContainer>
													<Image src={image} />
													<IconContainer>
														<span>
															<IconEm>
																<Icon icon="fluent:navigation-play-20-regular" />
															</IconEm>
															<small>Add to queue</small>
														</span>
														<span>
															<IconEm>
																<Icon icon="ion:time-outline" />
															</IconEm>
															<small>Watch later</small>
														</span>
													</IconContainer>
													<Duration>{video_length}</Duration>
												</ImageContainer>
											</A>
											<ContainerContent>
												<A to={path}>
													<Content>
														<Title>{title}</Title>
														<div>
															<Channel>
																<ChannelName>{channelName}</ChannelName>
																{isVerified ? (
																	<Verify>
																		<Icon icon="material-symbols:check-circle" />
																	</Verify>
																) : (
																	""
																)}
															</Channel>
															<Channel>
																<ChannelName>{views}K views</ChannelName>
																<small>&#x2022;</small>
																<ChannelName>
																	{period_length} {period} ago
																</ChannelName>
															</Channel>
														</div>
													</Content>
												</A>
												<TriggerButton>
													<Icon icon="radix-icons:dots-vertical" />
												</TriggerButton>
											</ContainerContent>
										</Container>
									);
								})}
							</Body>
						</Body>
					</ContentCont>

					<ContentCont>
						<Header>
							<Left>
								<Em>
									<Icon icon="fluent:navigation-play-20-regular" />
								</Em>
								<h5>Playlists</h5>
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
								<h5>Your clips</h5>
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
						<RightImage src={jpeg} />
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
							<small>2</small>
						</Liner>
					</LinerContainer>
				</SmallContainer>
			</ParentContainer>
		</>
	);
};

export default Librarypage;
