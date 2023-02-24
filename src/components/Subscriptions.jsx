import { useEffect, useReducer } from "react";
import {
	Button,
	Subers,
	YImage,
	YImageCont,
	YLink,
	YName,
	YoutuberCont,
	YoutubersWrapper,
	YTitle,
	YWrapperTitle,
} from "../assets/css/SubscriptionStyles";
import YouImage from "../assets/images/youtube-image-comp.svg";

const actions = {
	SUBSCRIBE: "subscribe",
	SET_YOUTUBERS: "setYoutubers",
	ERROR: "setError",
};

const youtubeUsers = {
	users: [],
	error: null,
};

const Subscriptions = () => {
	const { SUBSCRIBE, SET_YOUTUBERS, ERROR } = actions;

	function reducer(state, action) {
		switch (action.type) {
			case SET_YOUTUBERS:
				const yUsers = action.dataResult.map((user) => {
					return {
						...user,
						isSubscribed: false,
					};
				});
				return {
					...state,
					users: yUsers,
				};

			case SUBSCRIBE:
				const subscribedYoutubers = state.users.map((user, index) => {
					const { isSubscribed } = user;

					if (action?.id === index) {
						return {
							...user,
							isSubscribed: !isSubscribed,
						};
					} else {
						return user;
					}
				});

				return {
					...state,
					users: subscribedYoutubers,
				};

			// case ERROR:

			default:
				throw new Error("New error");
		}
	}

	function handleSubscription(index) {
		dispatch({ type: SUBSCRIBE, id: index });
	}

	const [state, dispatch] = useReducer(reducer, youtubeUsers);

	useEffect(() => {
		const api_url = `https://randomuser.me/api/?results=12`;

		const fetchUrl = async () => {
			try {
				const response = await fetch(api_url);
				const data = await response.json();
				dispatch({ type: SET_YOUTUBERS, dataResult: data.results });
			} catch (error) {
				dispatch({ type: ERROR });
			}
		};

		fetchUrl();
	}, [SET_YOUTUBERS]);

	const fullname = (firstname, lastname) => {
		return `${firstname} ${lastname}`;
	};

	return (
		<>
			{state.users && (
				<div>
					<YWrapperTitle>
						<YTitle>Comedy & Entertainment</YTitle>
					</YWrapperTitle>
					<YoutubersWrapper>
						{state.users.map((youtuber, index) => {
							const {
								name: { first, last },
								picture: { large },
								location: {
									street: { number },
								},
								isSubscribed,
							} = youtuber;
							const f_name = fullname(first, last);

							return (
								<YoutuberCont key={index}>
									<YLink to="/">
										<YImageCont>
											<YImage src={large} />
										</YImageCont>
										<YName>{f_name}</YName>
										<Subers>{number} subscribers</Subers>
									</YLink>
									<Button subscription={isSubscribed} onClick={() => handleSubscription(index)}>
										{isSubscribed ? "Subscribed" : "Subscribe"}
									</Button>
								</YoutuberCont>
							);
						})}
					</YoutubersWrapper>
				</div>
			)}
			{!state.users && (
				<>
					{/* { && <img src={YouImage} style={{ maxWidth: "100%" }} alt="" />}
					<small>Error has happpended</small> */}
				</>
			)}
		</>
	);
};

export default Subscriptions;
