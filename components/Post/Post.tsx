import React, {FC, FormEvent, useState} from 'react';
import Image from "next/image";
import {TbDots} from "react-icons/tb";
import { AiOutlineHeart} from "react-icons/ai";
import {BsBookmark, BsChat} from "react-icons/bs";
import {ImHappy} from "react-icons/im";

import {useSession} from "next-auth/react";
import {addDoc, collection, serverTimestamp} from "@firebase/firestore";
import {db} from '@/utils/firebase';







const Post:FC<{postData:Post,id:string}> = ({postData,id}) => {
	const {image,profileImage,userName,caption}:Post = postData;
	const session = useSession();

	const {data:{user}}:any  = session;
	const [comment,setComment] = useState<string>("");

	const submitPost = async (e:FormEvent) => {
		e.preventDefault();
		const commentToSend = comment.trim();
		setComment('');
		try{
			await addDoc(collection(db,'posts', id, "comments"),{
				comment:commentToSend,
				userName: user.username,
				profileImage: user.image,
				timestamp: serverTimestamp()
			});
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<div className="bg-white my-7 border rounded-md">
			{/* POST HEADER */}
			<div className="flex items-center p-5">
				<Image
					className="rounded-full object-cover border p-1 mr-3 cursor-pointer"
					src={profileImage} alt={userName} width={35} height={35}/>

				<p className="font-bold flex-1 cursor-pointer">{userName}</p>
				<TbDots className="h-5 cursor-pointer"/>
			</div>

			{/* POST IMAGE */}
			<Image src={image} alt={userName} className="object-cover w-full" width={500} height={300} priority/>

			{/* POST BUTTON */}
			{session.status === 'authenticated' && (
				<div className="flex justify-between items-center px-4 pt-4">
					<div className="flex space-x-4">
						<AiOutlineHeart className="btn"/>
						<BsChat className="btn"/>
					</div>
					<BsBookmark className="btn"/>
				</div>
			)}

			{/* POST COMMENT */}
			<p className="p-5 truncate ">
				<span className="font-bold mr-2">{userName}</span> {caption}
			</p>

			{/* POST INPUT */}
			{session.status === 'authenticated' && (
				<form className="flex items-center p-4" onSubmit={(e:FormEvent)=>submitPost(e)}>
					<ImHappy className="h-7"/>
					<input
						value={comment}
						onChange={(e)=>setComment(e.target.value)}
						type="text" placeholder="Write something" className="border-none flex-1 focus:ring-0"/>
					<button
						type="submit"
						disabled={!comment.trim()}
						className={`text-blue-400 font-bold disabled:text-blue-200`}>Post</button>
				</form>
			)}
		</div>
	);
};

export default Post;
