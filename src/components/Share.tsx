"use client";

import {
	ImageKitAbortError,
	ImageKitInvalidRequestError,
	ImageKitServerError,
	ImageKitUploadNetworkError,
	upload,
} from "@imagekit/next";
import { ChangeEvent, FormEvent, useState } from "react";
import { Image } from "./Image";
import { authenticateUser } from "@/services/imageUpload";

function Share() {
	const [media, setMedia] = useState<File | null>(null);

	const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setMedia(e.target.files[0]);
		}
	};

	const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!media) return;

		let authParams;

		try {
			authParams = await authenticateUser();
		} catch (authError) {
			console.error("Failed to authenticate for upload:", authError);
			return;
		}

		const { signature, expire, token, publicKey } = authParams;

		try {
			await upload({
				// Authentication parameters
				expire,
				token,
				signature,
				publicKey,
				folder: "/posts",
				file: media,
				fileName: media.name,
			});
		} catch (error) {
			// Handle specific error types provided by the ImageKit SDK.
			if (error instanceof ImageKitAbortError) {
				console.error("Upload aborted:", error.reason);
			} else if (error instanceof ImageKitInvalidRequestError) {
				console.error("Invalid request:", error.message);
			} else if (error instanceof ImageKitUploadNetworkError) {
				console.error("Network error:", error.message);
			} else if (error instanceof ImageKitServerError) {
				console.error("Server error:", error.message);
			} else {
				// Handle any other errors that may occur.
				console.error("Upload error:", error);
			}
		}
	};

	return (
		<form onSubmit={handleUpload} className="p-4 flex gap-4">
			<div className="relative w-10 h-10 overflow-hidden rounded-full">
				<Image src="/general/avatar.png" alt="User's avatar" fill />
			</div>
			<div className="flex-1 flex flex-col gap-4">
				<input
					name="desc"
					type="text"
					className="w-full bg-transparent outline-none placeholder:text-textGray text-xl"
					placeholder="What is happening?"
				/>
				<div className="flex gap-4 justify-between items-center flex-wrap">
					<div className="flex gap-4 flex-wrap">
						<input
							hidden
							type="file"
							name="file"
							id="file-input"
							onChange={handleMediaChange}
						/>
						<label htmlFor="file-input" className="cursor-pointer">
							<Image src="icons/image.svg" alt="" width={20} height={20} />
						</label>
						<Image src="icons/gif.svg" alt="" width={20} height={20} />
						<Image src="icons/poll.svg" alt="" width={20} height={20} />
						<Image src="icons/emoji.svg" alt="" width={20} height={20} />
						<Image src="icons/schedule.svg" alt="" width={20} height={20} />
						<Image src="icons/location.svg" alt="" width={20} height={20} />
					</div>
					<button
						type="submit"
						className="bg-white text-black font-bold rounded-full px-4 py-2"
					>
						Post
					</button>
				</div>
			</div>
		</form>
	);
}

export { Share };
