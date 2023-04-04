import React from 'react';

const Post = ({postData}:{postData:Post}) => {
	const {id,img,userImg,userName}:Post = postData;
	return (
		<div>
			<h1>{userName}</h1>
		</div>
	);
};

export default Post;
