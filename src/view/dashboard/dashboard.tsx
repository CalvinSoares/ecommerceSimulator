"use client";

import { NavBar, ProductCard } from "@/components";
import Header from "@/components/header";
import api from "@/services";
import apiClient from "@/services/api";
import type { ProductProps } from "@/types/producType";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
	const [products, setProducts] = useState<ProductProps[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const response = await apiClient.get<ProductProps[]>(api.products);
			setProducts(response.data);
		} catch (error) {
			console.error("Erro ao buscar produtos:", error);
		}
	};

	return (
		<div className="bg-[#EBF2F0] min-h-screen w-full justify-start flex ">
			<NavBar />

			<div className="flex flex-col w-full ml-12 p-4">
				<Header title="Home" />

				<div className="">
					<div className="grid grid-cols-3 gap-6 h-full w-full">
						{products.map((product) => (
							<ProductCard
								_id={product._id}
								key={product._id}
								name={product.name}
								category={product.category}
								price={product.price}
								description={product.description}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
