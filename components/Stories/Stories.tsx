import React, {useState, useEffect} from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import {Story} from "@/components";

const Stories = () => {
	const [storyUsers, setStoryUsers] = useState([]);

	useEffect(()=>{
		const storyU:any = minifaker.array(20,(index)=>(
			{
				userName: minifaker.username({locale:'en'}).toLowerCase(),
				img:`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
				id: index
			}
		));
		setStoryUsers(storyU);
	},[])


	return (
		<div>
			{storyUsers && storyUsers.map((user:User)=>(
				<Story userData={user} key={user.id} />
			))}
		</div>
	);
};

export default Stories;
