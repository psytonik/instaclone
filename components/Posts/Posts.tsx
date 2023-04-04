import React from "react";
import {Post} from "@/components";

const posts:Post[] = [
	{
		id: 1,
		userName: 'psytonik',
		userImg: 'https://anthonyfink.dev/profile.png',
		img:'https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		caption: 'Nice Picture'
	},
	{
		id: 2,
		userName: 'psytonik',
		userImg: 'https://anthonyfink.dev/profile.png',
		img:'https://images.unsplash.com/photo-1680448588521-35f5d04a4193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
		caption: 'Nice Picture'
	},
	{
		id: 3,
		userName: 'psytonik',
		userImg: 'https://anthonyfink.dev/profile.png',
		img:'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		caption: 'Nice Picture'
	},
	{
		id: 4,
		userName: 'psytonik',
		userImg: 'https://anthonyfink.dev/profile.png',
		img:'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
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
