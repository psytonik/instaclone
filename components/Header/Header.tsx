import React, {useEffect} from 'react';
import Image from "next/image";
import {BiSearch} from "react-icons/bi";
import {AiFillHome} from "react-icons/ai";
import {BsPlusCircle} from 'react-icons/bs';
import {modalState} from "@/atom/modalAtom";
import {useRecoilState} from "recoil";
import {useRouter} from "next/router";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {db} from "@/utils/firebase";
import {doc, getDoc} from "@firebase/firestore";
import {userState} from "@/atom/userAtom";

const Header = () => {
	const [currentUser,setCurrentUser] = useRecoilState<any | null>(userState);
	const auth = getAuth();

	useEffect(()=>{
		onAuthStateChanged(auth,(user:any|null) => {
			if(user){
				const fetchUser = async() => {
					const docRef = doc(db,'users',user?.auth.currentUser?.providerData[0].uid);
					const docSnap= await getDoc(docRef);
					if(docSnap.exists()){
						setCurrentUser(docSnap.data());
					}
				}
				fetchUser().then()
			}
		})
	},[auth, setCurrentUser]);
	const onSignOut = async () => {
		await signOut(auth);
		setCurrentUser(null);
	}
	const [,setOpen] = useRecoilState<boolean>(modalState);
	const router = useRouter();

	return	 (
		<nav className="shadow-sm border-b sticky top-0 bg-white z-30">
			<div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
				{/* LEFT */}
				<div className="w-36 h-20 relative hidden lg:inline-grid cursor-pointer">
					<Image
						width={103}
						height={29}
						src={'https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png'}
						alt={'Insta Logo'}
						className="object-contain h-20"
						onClick={()=>router.push('/')}
					/>
				</div>
				<div className="w-10 h-20 relative lg:hidden cursor-pointer">
					<Image
						width={100}
						height={200}
						src={'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'}
						alt={'Insta Logo'}
						className="object-contain h-20"
						onClick={()=>router.push('/')}
					/>
				</div>

				{/* MIDDLE */}
				<div className="relative mt-1">
					<div className="absolute top-2 left-2">
						<BiSearch className="h-5 text-gray-500 "/>
					</div>
					<input
						type="text"
						className="rounded-md bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black"
						placeholder="Search"/>
				</div>

				{/* RIGHT */}

				<div className="flex space-x-4 items-center">
					<AiFillHome
						className="hidden md:inline-flex h-12 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
						onClick={()=>router.push('/')}
					/>
					{
						currentUser ?
							(
						<>
							<BsPlusCircle
								onClick={()=>setOpen(true)}
								className="h-12 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
							<img
								onClick={onSignOut}
								src={currentUser.userImage || 'https://anthonyfink.dev/profile.png'}
								alt="image"
								className=" h-10 rounded-full cursor-pointer"
							/>
						</>
					):(
						<button onClick={()=>router.push('/auth/sign-in')}>Sign In</button>
					)}
				</div>
			</div>


		</nav>
	);
};

export default Header;
