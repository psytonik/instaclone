import React from 'react';
import Image from "next/image";
const Story = ({userData}: { userData: User }) => {
	const {img,userName} = userData;
	return (
		<>
			<Image src={img} alt={userName} width={150} height={150} className="rounded-full" />
			<p>{userName}</p>
		</>
	);
};

export default Story;
