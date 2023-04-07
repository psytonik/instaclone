import React, {useState, useEffect, FC} from 'react';
import miniFaker from 'minifaker';
import 'minifaker/locales/en';
import {Story} from "@/components";
import {useSession} from "next-auth/react";

const Stories: FC = () => {
	const {data:session}:any = useSession();

	const [storyUsers, setStoryUsers] = useState<[]>([]);

	useEffect(()=>{
		const storyU:any = miniFaker.array(40,(index)=>(
			{
				userName: miniFaker.username({locale:'en'}).toLowerCase(),
				img:`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
				id: index
			}
		));
		setStoryUsers(storyU);
	},[])


	return (
		<div
			className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
			{session && (<Story userName={session.user.username} img={session.user.image} isUser={true}/>)}
			{storyUsers && storyUsers.map((user:User)=>(
				<Story userName={user.userName} img={user.img} key={user.id} isUser={false}/>
			))}
		</div>
	);
};

export default Stories;
