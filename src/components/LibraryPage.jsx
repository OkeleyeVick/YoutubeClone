import { Icon } from "@iconify/react";
import React from "react";
import { Em, Header, L, LargeContainer, Left, ParentContainer, Right, SmallContainer } from "../assets/css/LibraryStyles";

const Librarypage = () => {
	return (
		<>
			<ParentContainer>
				<LargeContainer>
					<Header>
						<Left>
							<Em>
								<Icon icon="cil:history" />
							</Em>
							<span>History</span>
						</Left>
						<Right>
							<L to="/">See all</L>
						</Right>
					</Header>
				</LargeContainer>
				<SmallContainer></SmallContainer>
			</ParentContainer>
			<h1>
				<Icon icon="ph:scissors-light" />
				<Icon icon="ion:time-outline" />
			</h1>
		</>
	);
};

export default Librarypage;
