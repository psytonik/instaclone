import React from 'react';
import Image from "next/image";
import {AiOutlinePlus} from "react-icons/ai";

const Story = ({img,userName, isUser}:any) => {

	return (
		<div className="relative group cursor-pointer">
			<Image
				src={img}
				alt={userName}
				width={150}
				height={150}
				className="rounded-full h-14 p-[1.5px]
				border border-red-500 border-2
				group-hover:scale-110 transition-transform duration-200 ease-out" />
			{isUser && (<AiOutlinePlus className="h-6 absolute top-4 left-4 text-white font-bold"/>)}
			<p className="text-xs w-14 truncate">{userName}</p>
		</div>
	);
};

export default Story;
