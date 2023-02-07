import { ContainerInner, MainBodyContainer } from "../assets/css/MainBodyStyles";
import Navbar from "./Navbar";
import ShortsPage from "./ShortsPage";

const MainBody = () => {
	return (
		<MainBodyContainer>
			<Navbar />
			<ContainerInner>
				<ShortsPage />
			</ContainerInner>
		</MainBodyContainer>
	);
};

export default MainBody;
