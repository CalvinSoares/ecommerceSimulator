"use client";

import Logo from "../../../assets/Logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { RiAccountBoxLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
	return (
		<aside className="bg-white shadow-lg shadow-green-600 text-gray-800 w-[18vw] min-h-screen max-w-[60vw] left-0 top-0 z-50">
			<div className="p-4 ">
				<h2 className="text-xl text-green-600 flex items-center justify-center font-semibold mb-4 nav-icon">
					<Image
						src={Logo}
						alt="Logo da empresa"
						width={50}
						height={50}
						priority
					/>
					SavorFlavor
				</h2>
				<div className="flex justify-center pt-20">
					<ul className="flex flex-col items-start justify-center gap-4">
						<li className="hover:text-green-600 hover:border-l-2 hover:border-green-500  w-40 h-8 flex items-center justify-start px-4 duration-100">
							<Link
								href="/dashboard"
								className="my-6 rounded-s-3xl h-12 flex items-center justify-center"
							>
								<IoHomeOutline className="mr-4" size={24} /> Dashboard
							</Link>
						</li>
						<li className="hover:text-green-600 hover:border-l-2 hover:border-green-500  w-40 h-8 flex items-center justify-start px-4 duration-100">
							<Link
								href="/account"
								className="my-6 rounded-s-3xl h-12 flex items-center "
							>
								<RiAccountBoxLine className="mr-4" size={24} /> Accounts
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default NavBar;
