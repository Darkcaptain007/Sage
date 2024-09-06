// import React from "react";
import { bgImage } from "../assets/pictures";
import { useState, useEffect } from "react";
import { fetchUniqueFields } from "../api/auth.api";

function Mentee() {
	const [options, setOptions] = useState<Array<string> | null>([]);

	useEffect(() => {
		const fetchFields = () => {};
	}, []);

	return (
		<div
			className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div className="text-center mt-10">
				<h2 className="text-3xl font-semibold text-gray-800">
					Search your favourite topic
				</h2>

				<div className="mt-6 flex flex-col space-y-1">
					<label htmlFor="landmark" className="text-white">
						Landmark
					</label>
					<select
						name="Select Location"
						id="landmark"
						className="w- min-w-72 h-8 rounded-md px-2 pb-1 flex items-center border-none"
					>
						<option value="">Maths</option>
						<option value="Physics">Physics</option>
						<option value="Chemistry">Chemistry</option>
						<option value="Biology">Biology</option>
						<option value="IT">IT</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default Mentee;
