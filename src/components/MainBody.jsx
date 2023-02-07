import { Route, Routes } from "react-router-dom";
import IndexPage from "../assets/css/Index";
import { ContainerInner, MainBodyContainer } from "../assets/css/MainBodyStyles";
import ErrorPage from "./ErrorPage";
import Librarypage from "./LibraryPage";
import Navbar from "./Navbar";
import ShortsPage from "./ShortsPage";
import Subscriptions from "./Subscriptions";

const MainBody = () => {
	return (
		<MainBodyContainer>
			<Navbar />
			<ContainerInner>
				<Routes>
					<Route path="/" element={<IndexPage />} />
					<Route path="shorts" element={<ShortsPage />} />
					<Route path="library" element={<Librarypage />} />
					<Route path="subscriptions" element={<Subscriptions />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</ContainerInner>
		</MainBodyContainer>
	);
};

export default MainBody;
