import React from "react"
import Button from "./Button"
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/24/outline"
import InputWithAvatar from "./InputWithAvatar"

export function CreateAPost({ addPost }) {
  return (
    <div className="bg-gray-50 p-2 m-2 rounded-lg drop-shadow-md">
      <InputWithAvatar
        addPost={addPost}
        placeholder="What's on your mind Bill?"
      />
      <div className="flex justify-evenly mt-2 gap-2">
        <Button Icon={VideoCameraIcon}>Live video</Button>
        <Button Icon={CameraIcon}>Photo/Video</Button>
      </div>
    </div>
  )
}

export default CreateAPost
