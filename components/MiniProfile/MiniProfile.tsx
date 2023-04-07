import React from 'react';
import {signOut, useSession} from 'next-auth/react'

const MiniProfile = () => {
	const {data: session}:any = useSession();
	return (
		<>
			{
				session ? (
					<div className="flex items-center justify-between mt-14 ml-10 ">
						<img
							src={session?.user.image}
							alt="image"
							className=" h-16 rounded-full boarder p-[2px] cursor-pointer"
						/>
						<div className="flex-1 ml-4">
							<h2 className="font-bold">
								{session.user.username}
							</h2>
							<h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
						</div>
						<button
							onClick={()=>signOut()}
							className="font-semibold text-blue-400 text-sm">Sign Out</button>
					</div>
				): (<></>)
			}
		</>
	);
};

export default MiniProfile;
