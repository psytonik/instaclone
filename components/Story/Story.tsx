import React from 'react';
import Image from "next/image";
const Story = ({userData}: { userData: User }) => {
	const {img,userName} = userData;
	return (
		<div>
			<Image
				src={img}
				alt={userName}
				width={150}
				height={150}
				className="rounded-full h-14 p-[1.5px]
				border border-red-500 border-2 cursor-pointer
				hover:scale-110 transition-transform duration-200 ease-out" />
			<p className="text-xs w-14 truncate">{userName}</p>
		</div>
	);
};

export default Story;
