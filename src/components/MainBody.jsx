import { Route, Routes } from "react-router-dom";
import { ContainerInner, MainBodyContainer } from "../assets/css/MainBodyStyles";
import Librarypage from "./LibraryPage";
import Navbar from "./Navbar";
import ShortsPage from "./ShortsPage";

const MainBody = () => {
	return (
		<MainBodyContainer>
			<Navbar />
			<ContainerInner>
				<Routes>
					<Route path="shorts" element={<ShortsPage />} />
					<Route path="library" element={<Librarypage />} />
				</Routes>
			</ContainerInner>
		</MainBodyContainer>
	);
};

export default MainBody;
