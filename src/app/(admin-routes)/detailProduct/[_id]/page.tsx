"use client";

import apiClient from "@/services/api";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface User {
	name: string;
	email: string;
}

const Page = () => {
	const { _id } = useParams();
	const token = localStorage.getItem("token"); // Pegando o token de autenticação do localStorage
	const navigate = useRouter();
	const [viewedUser, setViewedUser] = useState<User | null>(null);
	const [purchasedUser, setPurchasedUser] = useState<User | null>(null);

	useEffect(() => {
		registerView();
	}, [_id]);

	const registerView = async () => {
		try {
			const response = await apiClient.post(
				`/api/product/products/${_id}/view`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			setViewedUser(response.data.user); // Armazena o usuário que visualizou
		} catch (error) {
			console.error("Erro ao registrar visualização:", error);
		}
	};

	const handleBuyClick = async () => {
		try {
			const response = await apiClient.post(
				`/api/products/products/${_id}/purchase-click`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			setPurchasedUser(response.data.user); // Armazena o usuário que clicou
			alert("Clique em comprar registrado com sucesso!");
		} catch (error) {
			console.error("Erro ao registrar compra:", error);
		}
	};

	return (
		<div className="bg-[#EBF2F0] h-screen w-screen flex flex-col justify-center items-center">
			<div className="flex justify-center items-center gap-4 h-full">
				<button
					className="bg-green-500 text-black px-3 py-2 rounded-md"
					type="button"
					onClick={() => navigate.push("/dashboard")}
				>
					Voltar
				</button>
				<button
					className="bg-blue-500 text-black px-3 py-2 rounded-md"
					type="button"
					onClick={handleBuyClick}
				>
					Comprar
				</button>
			</div>

			{/* Renderiza informações do usuário que visualizou o produto */}
			{viewedUser && (
				<div className="mt-4">
					<h2>Usuário que visualizou:</h2>
					<p>Nome: {viewedUser.name}</p>
					<p>Email: {viewedUser.email}</p>
				</div>
			)}

			{/* Renderiza informações do usuário que clicou em comprar */}
			{purchasedUser && (
				<div className="mt-4">
					<h2>Usuário que clicou em Comprar:</h2>
					<p>Nome: {purchasedUser.name}</p>
					<p>Email: {purchasedUser.email}</p>
				</div>
			)}
		</div>
	);
};

export default Page;
