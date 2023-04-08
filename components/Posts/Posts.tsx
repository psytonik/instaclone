import React, {useEffect, useState} from "react";
import {Post} from "@/components";
import {collection, onSnapshot, orderBy, query} from "@firebase/firestore";
import {db} from "@/utils/firebase";

const Posts = () => {
	const [posts,setPosts] = useState<any>([]);
	useEffect(() => {
		return onSnapshot(
			query(collection(db, "posts"), orderBy('timestamp', 'desc')), (snapshot) => {
				setPosts(snapshot.docs)
			});
	}, []);

	return (
		<div>
			{posts
				.map((post:any,index:number)=> (<Post key={index} postData={post.data()} />))
			}
		</div>
	);
};

export default Posts;
