import React from 'react';
import Image from "next/image";
import {BiSearch} from "react-icons/bi";

const Header = () => {
	return (
		<div className="">
			<div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
				{/* LEFT */}
				<div className=" h-24 w-24 relative hidden lg:inline-grid cursor-pointer mt-10">
					<Image
						width={100}
						height={100}
						src={'https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png'}
						alt={'Insta Logo'}
						className="object-contain"
					/>
				</div>
				<div className=" h-24 w-10 relative lg:hidden cursor-pointer  mt-14">
					<Image
						width={100}
						height={200}
						src={'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'}
						alt={'Insta Logo'}
						className="object-contain"
					/>
				</div>
				{/* MIDDLE */}
				<div className="relative mt-1">
					<div className="absolute top-2 left-2">
						<BiSearch className="h-5 text-gray-500 "/>
					</div>
					<input
						type="text"
						className="rounded-md bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black"
						placeholder="Search"/>
				</div>

				{/* RIGHT */}
				<h1>Right Side</h1>
			</div>


		</div>
	);
};

export default Header;
