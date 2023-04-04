import React from "react";
import {Post} from "@/components";

const posts:Post[] = [
	{
		id: 1,
		userName: 'psytonik',
		userImg: 'https://anthonyfink.dev/profile.png',
		img:'https://images.unsplash.com/photo-1680363470732-4760c2a2a777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		caption: 'Nice Picture'
	},
	{
		id: 2,
		userName: 'psytonik',
		userImg: 'https://anthonyfink.dev/profile.png',
		img:'https://images.unsplash.com/photo-1679678690677-10362dc4bfd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		caption: 'Nice Picture'
	},
	{
		id: 3,
		userName: 'psytonik',
		userImg: 'https://anthonyfink.dev/profile.png',
		img:'https://plus.unsplash.com/premium_photo-1676977396527-96db41f59b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		caption: 'Nice Picture'
	},
	{
		id: 4,
		userName: 'psytonik',
		userImg: 'https://anthonyfink.dev/profile.png',
		img:'https://images.unsplash.com/photo-1680535131131-4d79b312d5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
		caption: 'New Center in my city'
	},
]
const Posts = () => {

	return (
		<div>
			{posts.map(post=>(
				<Post key={post.id} postData={post} />
			))
			}
		</div>
	);
};

export default Posts;
