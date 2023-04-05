import React from 'react';
import {getProviders, signIn} from "next-auth/react";
import {Header} from "@/components";
const SignIn = ({providers}:any) => {

	return (
		<>
			<Header/>
			<div className="">
				<img src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png" alt="images"/>
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
