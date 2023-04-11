import React from 'react';
import {useRecoilState} from "recoil";
import {userState} from "@/atom/userAtom";
import {getAuth, signOut} from "firebase/auth";
import Image from "next/image";

const MiniProfile = () => {
	const [currentUser,setCurrentUser] = useRecoilState<any>(userState);
	const auth = getAuth();
	const onSignOut = async () => {
		await signOut(auth);
		setCurrentUser(null);
	}
	return (
		<>
			{
				currentUser ? (
					<div className="flex items-center justify-between mt-14 ml-10 ">
						<Image
							width={65}
							height={60}
							src={currentUser?.userImage}
							alt="image"
							className="h-16 rounded-full boarder p-[2px] cursor-pointer"
						/>
						<div className="flex-1 ml-4">
							<h2 className="font-bold">
								{currentUser?.username}
							</h2>
							<h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
						</div>
						<button
							onClick={onSignOut}
							className="font-semibold text-blue-400 text-sm">Sign Out</button>
					</div>
				): (<></>)
			}
		</>
	);
};

export default MiniProfile;
