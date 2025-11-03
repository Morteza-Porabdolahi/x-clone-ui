"use server";

import { ImageKitAbortError, ImageKitInvalidRequestError, ImageKitServerError, ImageKitUploadNetworkError, upload } from "@imagekit/next";
import { getUploadAuthParams } from "@imagekit/next/server";

export const shareAction = async (formData: FormData) => {
  const file = formData.get("file") as File;
  // const desc = formData.get('desc') as string;

  const { signature, token, expire } = getUploadAuthParams({
    privateKey: process.env.NEXT_PRIVATE_KEY!,
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  });

  try {
    console.log()
    upload({
      file,
      fileName: file.name,
      folder: "/posts",
      publicKey: process.env.NEXT_PUBILC_PUBLIC_KEY!,
      signature,
      token,
      expire,
      transformation: {
        pre: "w-600",
      },
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
