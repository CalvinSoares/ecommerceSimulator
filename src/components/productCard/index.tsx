import type { ProductProps } from "@/types/producType";
import Link from "next/link";

const ProductCard = ({
	_id,
	name,
	category,
	price,
	description,
}: ProductProps) => {
	return (
		<Link
			href={`detailProduct/${_id}`}
			className="w-full h-full p-2 rounded-md shadow-md cursor-pointer justify-center items-center"
		>
			<div className="bg-[#f8f1f0] w-full h-48 rounded-md flex flex-col items-center justify-center p-4">
				<div className="">
					<h1 className="text-black font-bold w-24 py-1 text-center rounded-md bg-[#e9868249]">
						{category}
					</h1>
				</div>

				<div className="mt-4 self-start">
					<p className="text-black text-lg font-semibold">{name}</p>
					<p className="text-gray-700 mt-2">{description}</p>
				</div>

				<div className="mt-4 text-lg font-bold text-black self-start">
					${price}
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
