import React from 'react';
import {getProviders, signIn} from "next-auth/react";
import {Header} from "@/components";
const SignIn = ({providers}:any) => {

	return (
		<>
			<Header/>
			<div className="flex justify-center space-x-7 mt-20">
				<img
					className="hidden object-cover rotate-6 md:inline-flex md:w-48"
					src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png" alt="images"/>
				<div className="">
					{providers && Object.values(providers).map((provider:any,index:number)=>(
						<div key={index} className="flex flex-col items-center">
							<img
								className="w-32 object-cover"
								src="https://www.careeractivate.com/wp-content/uploads/2019/04/Instagram-1.png" alt="insta img"/>
							<p className="text-sm italic my-10 text-center">This app created for learning purposes</p>
							<button
								onClick={()=>signIn(provider.id,{callbackUrl:"/"})}
								className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign In with {provider.name}</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SignIn;

export async function getServerSideProps () {
	const providers = await getProviders();
	return {
		props: {providers}
	}
}
