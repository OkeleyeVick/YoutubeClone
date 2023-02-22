import { useEffect, useMemo, useState } from "react";
import { YImage, YImageCont, YLink, YoutuberCont, YoutubersWrapper } from "../assets/css/DownloadPageStyles";

const Subscriptions = () => {
	const [youtubers, setYoutubers] = useState([]);

	useEffect(() => {
		const api_url = `https://randomuser.me/api/?results=10`;

		const fetchUrl = async () => {
			const response = await fetch(api_url);
			const data = await response.json();
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
				<YoutubersWrapper>
					{youtubersDatas.map((youtuber, index) => {
						const {
							name: { first, last },
							picture: { large },
						} = youtuber;
						const f_name = fullname(first, last);

						return (
							<YoutuberCont key={index}>
								<YLink to="/">
									<YImageCont>
										<YImage src={large} />
									</YImageCont>
								</YLink>
							</YoutuberCont>
						);
					})}
				</YoutubersWrapper>
			)}
		</h1>
	);
};

export default Subscriptions;
