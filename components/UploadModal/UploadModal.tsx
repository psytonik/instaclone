import React, {ChangeEvent, FC, SetStateAction, useRef, useState} from 'react';
import {modalState} from "@/atom/modalAtom";
import {useRecoilState} from "recoil";
import Modal from 'react-modal';
import {FiCamera} from "react-icons/fi";
import Image from 'next/image';
import {addDoc, collection, doc, serverTimestamp, updateDoc} from "@firebase/firestore";
import {db, storage} from "@/utils/firebase";
import {useSession} from "next-auth/react";
import {getDownloadURL, ref, uploadString} from "@firebase/storage";


const UploadModal: FC = () => {
	const [open,setOpen] = useRecoilState<boolean>(modalState);
	const {data:session}:any = useSession()
	const filePickerRef = useRef<HTMLInputElement>(null);
	const captionRef = useRef<HTMLInputElement>(null);

	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [loading,setLoading] = useState<boolean>(false);

	const addImageToPost = (event:ChangeEvent<HTMLInputElement>):void => {
		event.preventDefault();
		const reader = new FileReader();
		if(event.target.files){
			reader.readAsDataURL(event.target.files[0]);
		}
		reader.onload = (readerEvent:ProgressEvent<FileReader>)=>{
			setSelectedFile(readerEvent.target?.result as SetStateAction<File | null>)
		}
	}

	const onClose = ():void => {
		setSelectedFile(null)
		setOpen(false)
	}
	const uploadPost = async ():Promise<void> =>{
		if(loading)return;
		setLoading(true);
		const docRef = await addDoc(collection(db,"posts"),{
			caption: captionRef.current?.value,
			userName: session?.user?.username,
			profileImage: session.user.image,
			timestamp: serverTimestamp()
		});
		const imageRef = await ref(storage, `posts/${docRef.id}/image`);
		if(typeof selectedFile === 'string'){
			await uploadString(imageRef,selectedFile, "data_url")
				.then(async()=>{
					const downloadUrl= await getDownloadURL(imageRef);
					await updateDoc(doc(db,"posts",docRef.id),{
						image:downloadUrl
					})
				});
			setOpen(false);
			setLoading(false);
			setSelectedFile(null);
		}
	}

 	return (
		<div>
			{open && (
				<Modal
					ariaHideApp={false}
					isOpen={open}
					onRequestClose={onClose}
					className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%]
					bg-white border-2 rounded-lg shadow-md focus:ring-0"
				>
					<div className="flex flex-col justify-center items-center h-[100%]">
						{selectedFile ? (<Image
							src={typeof selectedFile === "string" ? selectedFile : URL.createObjectURL(selectedFile)}
							className="w-full max-h-[250px] object-cover cursor-pointer"
							width={100}
							height={100}
							onClick={()=>setSelectedFile(null)}
							alt="show image"/>) : (<>
							<FiCamera
								onClick={()=>filePickerRef.current?.click()}
								className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 w-14 text-red-500"/>
						</>)}
						<input
							type="file"
							accept="image/*"
							hidden ref={filePickerRef}
							onChange={addImageToPost}
						/>
						<input type="text"
							   className="m-4 border-none text-center w-full focus:ring-0"
							   maxLength={150}
							   placeholder="Please enter your caption"
							   ref={captionRef}
						/>
						<button
							disabled={!selectedFile || loading}
							onClick={uploadPost}
							className="w-full
							bg-red-600 rounded-md text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200
							disabled:cursor-not-allowed disabled:hover:brightness-100"
						>Upload Post</button>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default UploadModal;
