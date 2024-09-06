import axios from "axios";
import { User } from "../store";

const loginApiEndpoint = "/api/v1/user/login";
const logoutApiEndpoint = "/api/v1/user/logout";

const login = async (user: any): Promise<any> => {
	const response = await axios.post(loginApiEndpoint, {
		email: user?.email,
		name: user?.name,
		profilePic: user?.picture,
		isMentor: user?.isMentor,
	});

	const data = response.data.message;
	const loginUser: User = {
		name: data?.name,
		email: data?.email,
		profilePic: data?.profilePic,
		id: data?._id,
		isMentor: data?.isMentor,
	};

	return loginUser;
};

const logOut = async (): Promise<any> => {
	const response = await axios.post(logoutApiEndpoint);
	console.log(response); //tbr
};

const fetchUniqueFields = async (): Promise<Array<string> | null> => {
	const response = await axios.get("/api/v1/mentor/fields");

	return response.data.message;
};

export { login, logOut, fetchUniqueFields };
