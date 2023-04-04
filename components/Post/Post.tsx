import React from 'react';
import Image from "next/image";
import {TbDots} from "react-icons/tb";
import { AiOutlineHeart} from "react-icons/ai";
import {BsBookmark, BsChat} from "react-icons/bs";
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
			{/* POST BUTTON */}
			<div className="flex justify-between items-center px-4 pt-4">
				<div className="flex space-x-4">
					<AiOutlineHeart className="btn"/>
					<BsChat className="btn"/>
				</div>
				<BsBookmark className="btn"/>
			</div>
		</div>
	);
};

export default Post;
