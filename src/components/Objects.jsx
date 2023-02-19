import { Icon } from "@iconify/react";
import ImageOne from "../assets/images/image1.webp";
import ImageTwo from "../assets/images/image2.webp";
import ImageThree from "../assets/images/image3.webp";
import ImageFour from "../assets/images/image4.webp";
import ImageFive from "../assets/images/image5.webp";

//! <== SideBar Link ==>
export const AllPageLinks = [
	{
		path: "/",
		linkname: "Home",
		Icon: <Icon icon="ph:house" />,
		IconActive: <Icon icon="ph:house-fill" />,
	},
	{
		path: "/shorts",
		linkname: "Shorts",
		Icon: <Icon icon="clarity:video-gallery-line" />,
		IconActive: <Icon icon="clarity:video-gallery-solid" />,
	},
	{
		path: "/subscriptions",
		linkname: "Subscriptions",
		Icon: <Icon icon="teenyicons:money-stack-outline" />,
		IconActive: <Icon icon="teenyicons:money-stack-solid" />,
	},
	{
		path: "/library",
		linkname: "Library",
		Icon: <Icon icon="fluent:library-20-regular" />,
		IconActive: <Icon icon="fluent:library-20-filled" />,
	},
	{
		path: "/downloads",
		linkname: "Download Videos",
		Icon: <Icon icon="ph:download" />,
		IconActive: <Icon icon="ph:download-fill" />,
	},
];

//! <== each youtube dropdown in index page ==>
export const MenuItems = [
	{
		icon: <Icon icon="fluent:navigation-play-20-regular" />,
		linkname: "Add to queue",
	},
	{
		icon: <Icon icon="ph:clock-light" />,
		linkname: "Save to Watch later",
	},
	{
		icon: <Icon icon="ph:list-plus" />,
		linkname: "Save to playlist",
	},
	{
		icon: <Icon icon="fluent:arrow-download-20-regular" />,
		linkname: "Download",
	},
	{
		icon: <Icon icon="mdi-light:share" />,
		linkname: "Share",
	},
	{
		icon: <Icon icon="mdi-light:cancel" />,
		linkname: "Not interested",
	},
	{
		icon: <Icon icon="ph:minus-circle-light" />,
		linkname: "Don't recommend channel",
	},
	{
		icon: <Icon icon="heroicons:flag" />,
		linkname: "Report",
	},
];

//! <== offcanvas container links ==>
export const offcanvasContainers = [
	{
		linkItem: [
			{
				pathname: "/",
				linkname: "Home",
				Icon: <Icon icon="ph:house" />,
				IconActive: <Icon icon="ph:house-fill" />,
			},
			{
				pathname: "/shorts",
				linkname: "Shorts",
				Icon: <Icon icon="clarity:video-gallery-line" />,
				IconActive: <Icon icon="clarity:video-gallery-solid" />,
			},
			{
				pathname: "/subscriptions",
				linkname: "Subscription",
				Icon: <Icon icon="teenyicons:money-stack-outline" />,
				IconActive: <Icon icon="teenyicons:money-stack-solid" />,
			},
		],
	},
	{
		linkItem: [
			{
				pathname: "/library",
				linkname: "Library",
				Icon: <Icon icon="material-symbols:video-library-outline" />,
				IconActive: <Icon icon="material-symbols:video-library" />,
			},
			{
				pathname: "/history",
				linkname: "History",
				Icon: <Icon icon="octicon:history-24" />,
				IconActive: <Icon icon="octicon:history-16" />,
			},
			{
				pathname: "/Watch later",
				linkname: "Watch later",
				Icon: <Icon icon="bi:clock" />,
				IconActive: <Icon icon="bi:clock-fill" />,
			},
			{
				pathname: "/liked-videos",
				linkname: "Liked Videos",
				Icon: <Icon icon="material-symbols:thumb-up-outline" />,
				IconActive: <Icon icon="material-symbols:thumb-up" />,
			},
		],
	},
	{
		linkItem: [
			{
				pathname: "/trending",
				linkname: "Trending",
				Icon: <Icon icon="simple-line-icons:fire" />,
				IconActive: <Icon icon="el:fire" hFlip={true} />,
			},
			{
				pathname: "/music",
				linkname: "Music",
				Icon: <Icon icon="ph:music-note-light" />,
				IconActive: <Icon icon="ph:music-note-fill" />,
			},
			{
				pathname: "/gaming",
				linkname: "Gaming",
				Icon: <Icon icon="ion:game-controller-outline" />,
				IconActive: <Icon icon="ion:game-controller" />,
			},
			{
				pathname: "/news",
				linkname: "News",
				Icon: <Icon icon="ph:newspaper-clipping" />,
				IconActive: <Icon icon="ph:newspaper-clipping-fill" />,
			},
			{
				pathname: "/sports",
				linkname: "Sports",
				Icon: <Icon icon="fluent:trophy-48-regular" />,
				IconActive: <Icon icon="fluent:trophy-48-filled" />,
			},
		],
	},
	{
		linkItem: [
			{
				pathname: "/setting",
				linkname: "Setting",
				Icon: <Icon icon="ph:gear" />,
				IconActive: <Icon icon="ph:gear-fill" />,
			},
			{
				pathname: "/report-history",
				linkname: "Report History",
				Icon: <Icon icon="heroicons:flag" />,
				IconActive: <Icon icon="heroicons:flag-solid" />,
			},
			{
				pathname: "/help",
				linkname: "Help",
				Icon: <Icon icon="material-symbols:help-outline-rounded" />,
				IconActive: <Icon icon="material-symbols:help-rounded" />,
			},
			{
				pathname: "/feedback",
				linkname: "Send feedback",
				Icon: <Icon icon="iconoir:message-alert" />,
				IconActive: <Icon icon="mdi:message-alert" />,
			},
		],
	},
];

//! <== images for index page ==>
export const images = [
	{
		pathname: "/",
		image: ImageOne,
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageOne,
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: ImageTwo,
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageTwo,
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: ImageThree,
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageThree,
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: ImageFour,
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageFour,
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: ImageFive,
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: ImageFour,
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
];
