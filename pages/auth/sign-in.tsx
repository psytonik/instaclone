import React from 'react';
import {Header} from "@/components";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {db} from '@/utils/firebase'
import {doc, getDoc, serverTimestamp, setDoc} from "@firebase/firestore";
import {useRouter} from "next/router";
import Image from "next/image";

const SignIn = () => {
	const router = useRouter();
	const onGoogleClick = async() => {
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth,provider)
			const user = auth.currentUser?.providerData[0];
			if(!user){
				return;
			}
			const docRef = doc(db, "users", user.uid)
			const docSnap = await getDoc(docRef);

			if(!docSnap.exists()){
				await setDoc(docRef,{
					name: user.displayName,
					email: user.email,
					userImage: user.photoURL,
					uid:user.uid,
					timestamp: serverTimestamp(),
					username: user.displayName?.split(' ').join('').toLocaleLowerCase()
				})
			}
			await router.push(`/`)
		} catch (e) {
			if(e instanceof Error){
				console.log(e.message)
			}
		}
	}
	return (
		<>
			<Header/>
			<div className="flex justify-center space-x-7 mt-20">
				<Image
					width={250}
					height={80}
					style={{width:'auto',height:'auto'}}

					className="hidden object-cover rotate-6 md:inline-flex "
					src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png" alt="images"/>
				<div className="">
						<div className="flex flex-col items-center">
							<Image
								width={150}
								height={80}
								style={{width:'auto',height:'auto'}}

								className="object-cover"
								src="https://www.careeractivate.com/wp-content/uploads/2019/04/Instagram-1.png" alt="insta img"/>
							<p className="text-sm italic my-10 text-center">This app created for learning purposes</p>
							<button
								onClick={onGoogleClick}
								className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign In with Google</button>
						</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;
