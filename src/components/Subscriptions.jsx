import { useEffect, useMemo, useState } from "react";
import { YoutubersWrapper } from "../assets/css/DownloadPageStyles";

const Subscriptions = () => {
	const [youtubers, setYoutubers] = useState([]);

	useEffect(() => {
		const api_url = `https://randomuser.me/api/?results=2`;

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
							picture: { medium },
						} = youtuber;
						const f_name = fullname(first, last);

						return;
					})}
				</YoutubersWrapper>
			)}
		</h1>
	);
};

export default Subscriptions;
