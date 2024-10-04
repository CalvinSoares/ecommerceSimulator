"use client";

import { IoIosArrowDown } from "react-icons/io";
import User from "../../../assets/User.jpg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
	title: string;
}

const Header = ({ title }: HeaderProps) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="p-2 pt-4 bg-[#EBF2F0]">
			<div className="lg:flex md:flex sm:flex items-center justify-between">
				<div className="lg:flex md:hidden sm:hidden xs:hidden pl-72">
					<h1 className="text-gray-800 lg:text-2xl md:text-lg font-mono">
						{title}
					</h1>
				</div>
				<div className="flex items-center">
					<div className="lg:pl-0 md:pl-0 sm:pl-52 xs:pl-52 flex m-2 items-center justify-center relative ">
						<Image
							className="w-12 h-12 rounded-full"
							src={User}
							alt="user"
							width={150}
							height={150}
							priority
						/>
						<IoIosArrowDown
							className="text-white ml-2 cursor-pointer"
							size={20}
							onClick={() => setMenuOpen(!menuOpen)}
						/>
						{menuOpen && (
							<div className="absolute top-full right-0 z-10 mt-2 mr-6 bg-[#6b6b6b] h-24 w-44 rounded-md shadow-lg py-2">
								<Link
									href="/account"
									className="px-4 py-2 text-gray-800 hover:bg-slate-900 duration-200 rounded-xl cursor-pointer flex justify-center items-center"
								>
									<p className="text-white ml-2">Conta</p>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
