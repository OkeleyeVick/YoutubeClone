import { Icon } from "@iconify/react";

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
				linkname: "Subscriptions",
				Icon: <Icon icon="teenyicons:money-stack-outline" />,
				IconActive: <Icon icon="teenyicons:money-stack-solid" />,
			},
			{
				pathname: "/library",
				linkname: "Library",
				Icon: <Icon icon="fluent:library-20-regular" />,
				IconActive: <Icon icon="fluent:library-20-filled" />,
			},
			{
				pathname: "/downloads",
				linkname: "Download Videos",
				Icon: <Icon icon="ph:download" />,
				IconActive: <Icon icon="ph:download-fill" />,
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
				Icon: <Icon icon="clarity:thumbs-down-line" vFlip={true} />,
				IconActive: <Icon icon="clarity:thumbs-down-solid" vFlip={true} />,
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
		image: require("../assets/images/youtube-image.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image2.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/image5.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image3.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/tekno-beh-beh.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image1.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/netflix.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/netflix-icon.jpg"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/image6.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image1.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/image4.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image1.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/netflix.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/netflix-icon.jpg"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/image6.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image1.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/youtube-image.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image2.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/image5.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image3.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
	{
		pathname: "/",
		image: require("../assets/images/image4.webp"),
		imageTitle: "TED Motivation",
		views: "200k",
		duration: "2 weeks ago",
		profileImage: require("../assets/images/image1.webp"),
		title: "Get Inspired From Ted Talks and start working on your skill today",
	},
];

//! <== download page dom texts ==>
export const gridItems = [
	{
		icon: <Icon icon="uil:link" />,
		text: "1. On the youtube copy the address(URL) of the video you want to download. if you are in the youtube app , tap on the share button and the select Copy Link",
	},
	{
		icon: <Icon icon="fluent:notepad-32-filled" />,
		text: "2. Go back to this page and paste the copied url into the address field on the top of this page and then click on the Download button",
	},
	{
		icon: <Icon icon="ph:download-fill" />,
		text: "3. Now the list of video or audio files will be displayed in different qualities that you can select the desired quality and download the video or audio",
	},
];

//! <== sub navbar ==>
export const subnavbar = [
	{
		name: "All",
	},
	{
		name: "Gaming",
	},
	{
		name: "Music",
	},
	{
		name: "Mixes",
	},
	{
		name: "CSS",
	},
	{
		name: "Computer Programming",
	},
	{
		name: "Editing",
	},
	{
		name: "Tekno",
	},
	{
		name: "African Music",
	},
	{
		name: "Motivating",
	},
	{
		name: "Live",
	},
	{
		name: "Thrillers",
	},
	{
		name: "Comedy",
	},
	{
		name: "Ambient Music",
	},
	{
		name: "Rapping",
	},
	{
		name: "Recently uploaded",
	},
	{
		name: "New to you",
	},
];

//!<== profile dropdown ==>
export const profileDropdown = [
	{
		listItem: [
			{
				icon: <Icon icon="healthicons:ui-user-profile-outline" />,
				pathname: "Create a channel",
			},
			{
				icon: <Icon icon="arcticons:youtube-studio" />,
				pathname: "Youtube Studio",
			},
			{
				icon: <Icon icon="ph:user-switch-light" />,
				pathname: "Switch account",
			},
			{
				icon: <Icon icon="ph:sign-in-light" />,
				pathname: "Sign out",
			},
		],
	},
	{
		listItem: [
			{
				icon: <Icon icon="heroicons:currency-dollar" />,
				pathname: "Purchase and memberships",
			},
			{
				icon: <Icon icon="fluent-mdl2:security-group" />,
				pathname: "Your data in YouTube",
			},
		],
	},
	{
		listItem: [
			{
				icon: <Icon icon="ion:moon-outline" hFlip={true} />,
				pathname: "Appearance: Light",
			},
			{
				icon: <Icon icon="heroicons:language-solid" />,
				pathname: "Language: English",
			},
			{
				icon: <Icon icon="carbon:ibm-cloud-key-protect" />,
				pathname: "Restricted Mode: Off",
			},
			{
				icon: <Icon icon="ph:globe-light" />,
				pathname: "Location: Nigeria",
			},
			{
				icon: <Icon icon="fluent:keyboard-24-regular" />,
				pathname: "Keyboard Shortcuts",
			},
		],
	},
	{
		listItem: [
			{
				icon: <Icon icon="ep:setting" />,
				pathname: "Settings",
			},
		],
	},
	{
		listItem: [
			{
				pathname: "Help",
				icon: <Icon icon="clarity:help-line" />,
			},
			{
				pathname: "Send feedback",
				icon: <Icon icon="iconoir:message-alert" />,
			},
		],
	},
];

function GenerateRandomNumber() {
	return Math.floor(Math.random() * 1000);
}

//!<== Details for Library page ==>
export const LibraryItems = [
	{
		image: require("../assets/images/netflix.webp"),
		title: "Enjoy the new Netlifx & chill subscription",
		channelName: "Netflix",
		views: GenerateRandomNumber(),
		period: "days",
		period_length: 2,
		isVerified: true,
		video_length: "1:17",
		path: "/",
	},
	{
		image: require("../assets/images/image5.webp"),
		title: "Enjoy the new Netlifx & chill subscription",
		channelName: "Netflix",
		views: GenerateRandomNumber(),
		period: "year",
		period_length: 1,
		isVerified: false,
		video_length: "5:17:20",
		path: "/",
	},
	{
		image: require("../assets/images/youtube-image.webp"),
		title: "Enjoy the new Netlifx & chill subscription",
		channelName: "Netflix",
		views: GenerateRandomNumber(),
		period: "months",
		period_length: 2,
		isVerified: true,
		video_length: "3:17",
		path: "/",
	},
	{
		image: require("../assets/images/tekno-beh-beh.webp"),
		title: "Enjoy the new Netlifx & chill subscription",
		channelName: "Netflix",
		views: GenerateRandomNumber(),
		period: "weeks",
		period_length: 3,
		isVerified: false,
		video_length: "3:17",
		path: "/",
	},
	{
		image: require("../assets/images/image1.webp"),
		title: "Enjoy the new Netlifx & chill subscription",
		channelName: "Netflix",
		views: GenerateRandomNumber(),
		period: "year",
		period_length: 1,
		isVerified: false,
		video_length: "5:17:20",
		path: "/",
	},
	{
		image: require("../assets/images/image4.webp"),
		title: "Enjoy the new Netlifx & chill subscription",
		channelName: "Netflix",
		views: GenerateRandomNumber(),
		period: "months",
		period_length: 2,
		isVerified: true,
		video_length: "3:17",
		path: "/",
	},
	{
		image: require("../assets/images/image3.webp"),
		title: "Enjoy the new Netlifx & chill subscription",
		channelName: "Netflix",
		views: GenerateRandomNumber(),
		period: "weeks",
		period_length: 3,
		isVerified: false,
		video_length: "3:17",
		path: "/",
	},
	{
		image: require("../assets/images/image2.webp"),
		title: "Enjoy the new Netlifx & chill subscription",
		channelName: "Netflix",
		views: GenerateRandomNumber(),
		period: "weeks",
		period_length: 3,
		isVerified: false,
		video_length: "3:17",
		path: "/",
	},
];

//! <== each youtube dropdown in index page ==>
export const SubscriptionMenuItems = [
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
];
