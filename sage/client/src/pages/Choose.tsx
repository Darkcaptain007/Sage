// import React from "react";
// import menteeImage from "./assets/pngwing.com.png";
// import mentorImage from "./assets/teacher-png-46719.png";
// import backgroundImage from "./assets/bg image.png"; // Import the background image
import { useState } from "react";
import { bgImage, menteeImage, mentorImage } from "../assets/pictures";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../api/auth.api";
import { useStore } from "../store";

function Choose() {
	const [isMentor, setIsMentor] = useState(false);
	const navigate = useNavigate();

	const { user } = useAuth0();

	const setUser = useStore((state: any) => state.setUser);

	function handleMenteeClick() {
		try {
			const res = login({
				email: user?.email,
				name: user?.name,
				profilePic: user?.picture,
				isMentor,
			});

			setUser({
				email: user?.email,
				name: user?.name,
				profilePic: user?.picture,
				isMentor,
			});

			console.log(res);
		} catch (error) {
			console.log(error);
		}

		navigate("/mentee");
	}

	function handleMentorClick() {
		setIsMentor(true);

		try {
			const res = login({
				email: user?.email,
				name: user?.name,
				profilePic: user?.picture,
				isMentor,
			});

			setUser({
				email: user?.email,
				name: user?.name,
				profilePic: user?.picture,
				isMentor,
			});

			console.log(res);
		} catch (error) {
			console.log(error);
		}

		navigate("/mentor");
	}

	return (
		<div
			className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div className="text-center mt-10">
				<h2 className="text-3xl font-semibold text-gray-800">
					Choose your role
				</h2>
			</div>
			<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-10">
				<button
					onClick={handleMenteeClick}
					className="bg-blue-500 rounded-lg shadow-lg p-6 w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
				>
					<Card
						title="Mentee"
						description="A small description of role"
						imageUrl={menteeImage}
					/>
				</button>

				<button
					onClick={handleMentorClick}
					className="bg-blue-500 rounded-lg shadow-lg p-6 w-64 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
				>
					<Card
						title="Mentor"
						description="A small description of role"
						imageUrl={mentorImage}
					/>
				</button>
			</div>
		</div>
	);
}

// function Navbar() {
//   return (
//     <nav className="w-full bg-gray-800 p-4">
//       <h1 className="text-xl text-white ml-4">Logo and name</h1>
//     </nav>
//   );
// }

function Card({
	title,
	description,
	imageUrl,
}: {
	title: string;
	description: string;
	imageUrl: string;
}) {
	return (
		<div>
			<img src={imageUrl} alt={title} className="h-32 mx-auto mb-4" />
			<h3 className="text-xl font-semibold text-white">{title}</h3>
			<p className="text-sm text-white mt-2">{description}</p>
		</div>
	);
}

export default Choose;
