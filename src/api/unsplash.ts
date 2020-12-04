import axios from "axios";
const BASE_URL = `https://api.unsplash.com`;
const ACCESS_KEY = `rtJ5pudU_299J09Cr18yUKCW4A-99hc_23jDGWkUAfU`;

export default axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Client-ID ${ACCESS_KEY}`
	}
});
