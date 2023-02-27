import React from "react";
import error from "../assets/images/tired.png";
import { Body, BackToHomeLink, Message } from "../assets/css/ErrorPageStyles";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<Body>
			<div>
				<Message>
					<h2>Page Not Available, thank you for checking it out!</h2>
				</Message>
				<img src={error} alt="" />
				<BackToHomeLink onClick={() => navigate(-1)}>Go back</BackToHomeLink>
			</div>
		</Body>
	);
};

export default ErrorPage;
