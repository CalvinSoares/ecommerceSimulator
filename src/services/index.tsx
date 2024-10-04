const api = {
	baseUrl: "http://localhost:5000",
	login: "/api/auth/login",
	register: "/api/auth/register",
	products: "/api/product/products",
	product: (id: string) => `/api/product/product/${id}`,
};

export default api;
