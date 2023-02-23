import { useEffect, useMemo, useState } from "react";
import { Subers, YImage, YImageCont, YLink, YName, YoutuberCont, YoutubersWrapper, YTitle, YWrapperTitle } from "../assets/css/SubscriptionStyles";
import YouImage from "../assets/images/youtube-image-comp.svg";

const Subscriptions = () => {
	const [youtubers, setYoutubers] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const api_url = `https://randomuser.me/api/?results=12`;

		const fetchUrl = async () => {
			try {
				const response = await fetch(api_url);
				const data = await response.json();
				setYoutubers(data.results);
			} catch (error) {
				setError("Error occured");
			}
		};

		fetchUrl();
	}, []);

	const youtubersDatas = useMemo(() => {
		return youtubers;
	}, [youtubers]);

	const fullname = (firstname, lastname) => {
		return `${firstname} ${lastname}`;
	};
	return (
		<>
			{youtubersDatas && (
				<div>
					<YWrapperTitle>
						<YTitle>Comedy & Entertainment</YTitle>
					</YWrapperTitle>
					<YoutubersWrapper>
						{youtubersDatas.map((youtuber, index) => {
							const {
								name: { first, last },
								picture: { large },
								location: {
									street: { number },
								},
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
								</YoutuberCont>
							);
						})}
					</YoutubersWrapper>
				</div>
			)}
			{!youtubersDatas && (
				<>
					<small>Error has happpended</small>
				</>
			)}
			{error && <img src={YouImage} style={{ maxWidth: 100 }} alt="" />}
		</>
	);
};

export default Subscriptions;
