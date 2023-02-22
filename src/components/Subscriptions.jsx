import { useEffect, useMemo, useState } from "react";
import { Subers, YImage, YImageCont, YLink, YName, YoutuberCont, YoutubersWrapper, YTitle, YWrapperTitle } from "../assets/css/SubscriptionStyles";

const Subscriptions = () => {
	const [youtubers, setYoutubers] = useState([]);

	useEffect(() => {
		const api_url = `https://randomuser.me/api/?results=12`;

		const fetchUrl = async () => {
			const response = await fetch(api_url);
			const data = await response.json();
			console.log(data);
			setYoutubers(data.results);
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
		<h1>
			{youtubersDatas && (
				<>
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
				</>
			)}
		</h1>
	);
};

export default Subscriptions;
