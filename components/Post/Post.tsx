import React, {FC, FormEvent, useState, useEffect} from 'react';
import Image from "next/image";
import {TbDots} from "react-icons/tb";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {BsBookmark, BsChat} from "react-icons/bs";
import {ImHappy} from "react-icons/im";
import Moment from 'react-moment';
import {
	addDoc,
	collection,
	onSnapshot,
	orderBy,
	query,
	QueryDocumentSnapshot,
	serverTimestamp,
	setDoc,
	doc, deleteDoc
} from "@firebase/firestore";
import {db} from '@/utils/firebase';
import {useRecoilState} from "recoil";
import {userState} from "@/atom/userAtom";

const Post:FC<{postData:Post,id:string}> = ({postData,id}) => {
	const {image,profileImage,userName,caption}:Post = postData;

	const [comment,setComment] = useState<string>("");
	const [comments,setComments] = useState<QueryDocumentSnapshot[]>([]);
	const [hasLiked,setHasLiked] = useState<boolean>(false);
	const [likes, setLikes] = useState<QueryDocumentSnapshot[]>([]);
	const [currentUser] = useRecoilState<any |null>(userState);

	const submitPost = async (e:FormEvent) => {
		e.preventDefault();
		const commentToSend = comment.trim();
		setComment('');

		try{
			await addDoc(collection(db,'posts', id, "comments"),{
				comment:commentToSend,
				userName: currentUser?.username ??'',
				profileImage: currentUser?.userImage ?? '',
				timestamp: serverTimestamp()
			});
		} catch (e) {
			console.log(e);
		}
	}

	//// Fetching post comments
	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(collection(db,"posts", id,"comments"),orderBy('timestamp', 'desc')),
			(snapshot)=>{
				setComments(snapshot.docs)
			}
		)
		return () => unsubscribe();
	}, [id]);

	//// SET OR DELETE LIKE FROM FIREBASE
	const likePost = async() => {
		if(hasLiked) {
			await deleteDoc(doc(db,'posts', id, "likes", currentUser?.uid))
		} else {
			await setDoc(doc(db,"posts", id, "likes", currentUser?.uid), {
				username: currentUser?.username
			})
		}
	}

	//// Fetch likes from Database
	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db,"posts", id, "likes"),(snapshot)=>{
			setLikes(snapshot.docs)
		});
		return () => unsubscribe();
	}, [id]);

	///// Like the post
	useEffect(() => {
		setHasLiked(likes.findIndex(like => like.id === currentUser?.uid) != -1)
	}, [likes,currentUser]);

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
			<Image src={image} alt={userName} className="object-cover w-full" width={400} height={200} priority/>

			{/* POST BUTTON */}
			{currentUser && (
				<div className="flex justify-between items-center px-4 pt-4">
					<div className="flex space-x-4">
						{hasLiked ? (
							<AiFillHeart onClick={likePost} className="btn text-red-500"/>
						) : (
							<AiOutlineHeart onClick={likePost} className="btn"/>
						)}

						<BsChat className="btn"/>
					</div>
					<BsBookmark className="btn"/>
				</div>
			)}

			{/* POST COMMENT */}
			<div className="p-5 truncate ">
				{likes.length > 0 && (<p className="font-bold mb-1">
					{likes.length === 1 ? likes.length + ' ' +'like' :likes.length + ' ' + 'likes'}
				</p>) }
				<span className="font-bold mr-2">{userName}</span> {caption}
			</div>
			{comments.length > 0 && (
				<div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
					{comments.map((comment:any)=>(
							<div key={comment.id} className="flex items-center space-x-2 mb-2">
								<Image
									width={28}
									height={15}
									className="rounded-full h-7 cursor-pointer object-cover"
									src={comment.data().profileImage} alt="user image"/>
								<p className="font-semibold">{comment.data().userName}</p>
								<p className="flex-1 truncate">{comment.data().comment}</p>
								<Moment
									fromNow={comment.data().timestamp?.toDate()}
								>{comment.data().timestamp?.toDate()
								}</Moment>
							</div>
						)
					)}
				</div>
			)}

			{/* POST INPUT */}
			{currentUser && (
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
