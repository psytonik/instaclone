import React from 'react';
import Image from "next/image";
import {TbDots} from "react-icons/tb";
const Post = ({postData}:{postData:Post}) => {
	const {img,userImg,userName}:Post = postData;
	return (
		<div className="bg-white my-7 border rounded-md">
			{/* POST HEADER */}
			<div className="flex items-center p-5">
				<Image
					className="rounded-full object-cover border p-1 mr-3 cursor-pointer"
					src={userImg} alt={userName} width={35} height={35}/>

				<p className="font-bold flex-1 cursor-pointer">{userName}</p>
				<TbDots className="h-5 cursor-pointer"/>
			</div>
			{/* POST IMAGE */}
			<Image src={img} alt={userName} className="object-cover w-full" width={870} height={580}/>
		</div>
	);
};

export default Post;
