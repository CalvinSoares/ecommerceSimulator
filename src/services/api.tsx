import axios from "axios";
import api from ".";

const apiClient = axios.create({
	baseURL: api.baseUrl,
});

export default apiClient;
