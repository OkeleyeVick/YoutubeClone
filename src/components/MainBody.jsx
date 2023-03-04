import { Route, Routes } from "react-router-dom";
import IndexPage from "./Index";
import { ContainerInner, MainBodyContainer } from "../assets/css/MainBodyStyles";
import DownloadVideos from "./DownloadVideos";
import ErrorPage from "./ErrorPage";
import Librarypage from "./LibraryPage";
import Navbar from "./Navbar";
import ShortsPage from "./ShortsPage";
import Subscriptions from "./Subscriptions";
import SearchPageResult from "./SearchPageResult";

const MainBody = () => {
	return (
		<MainBodyContainer>
			<Navbar />
			<ContainerInner>
				<Routes>
					<Route path="/" element={<IndexPage />} />
					<Route path="/shorts" element={<ShortsPage />} />
					<Route path="/library" element={<Librarypage />} />
					<Route path="/subscriptions" element={<Subscriptions />} />
					<Route path="/downloads" element={<DownloadVideos />} />
					<Route path="/search" element={<SearchPageResult />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</ContainerInner>
		</MainBodyContainer>
	);
};

export default MainBody;
