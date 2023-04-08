import React from 'react';
import Image from "next/image";
import {BiSearch} from "react-icons/bi";
import {AiFillHome} from "react-icons/ai";
import {BsPlusCircle} from 'react-icons/bs';
import {useSession, signOut, signIn} from "next-auth/react";
import {modalState} from "@/atom/modalAtom";
import {useRecoilState} from "recoil";
import {useRouter} from "next/router";

const Header = () => {
	const {data:session} = useSession();
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
					{session ? (
						<>
							<BsPlusCircle
								onClick={()=>setOpen(true)}
								className="h-12 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
							<img
								onClick={()=>signOut()}
								src={session.user?.image || 'https://anthonyfink.dev/profile.png'}
								alt="image"
								className=" h-10 rounded-full cursor-pointer"
							/>
						</>
					):(
						<button onClick={()=>signIn()}>Sign In</button>
					)}
				</div>
			</div>


		</nav>
	);
};

export default Header;
