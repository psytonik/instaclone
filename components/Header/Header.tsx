import React from 'react';
import Image from "next/image";
const Header = () => {
	return (
		<div className="">
			<div className="flex items-center justify-between max-w-6xl">
				{/* LEFT */}
				<div className=" h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
					<Image
						width={100}
						height={200}
						src={'https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png'}
						alt={'Insta Logo'}
						className="object-contain"
					/>
				</div>
				<div className=" h-24 w-10 relative lg:hidden cursor-pointer">
					<Image
						width={100}
						height={200}
						src={'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'}
						alt={'Insta Logo'}
						className="object-contain"
					/>
				</div>
				{/* MIDDLE */}

				{/* RIGHT */}
				<h1>Right Side</h1>
			</div>


		</div>
	);
};

export default Header;
