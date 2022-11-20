import { React, useRef, useState } from "react"
import Button from "./Button"
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/24/outline"
import InputWithAvatar from "./InputWithAvatar"

export function CreateAPost({ onSubmit }) {
  const inputRef = useRef(null)
  const [image, setImage] = useState(null)

  function handleFileUpload(e) {
    const fileReader = new FileReader()

    fileReader.onload = (re) => {
      setImage(re.target.result)
    }

    fileReader.readAsDataURL(e.target.files[0])
  }

  function handleClickCameraIcon(e) {
    inputRef.current.click()
  }

  return (
    <div className="bg-gray-50 p-2 m-2 rounded-lg drop-shadow-md">
      <InputWithAvatar
        onSubmit={onSubmit}
        placeholder="What's on your mind Bill?"
      />
      {image && <img className="p-2 rounded-sm" src={image} alt="" />}
      <div className="flex justify-evenly mt-2 gap-2">
        <Button Icon={VideoCameraIcon}>Live video</Button>
        <Button Icon={CameraIcon} onClick={handleClickCameraIcon}>
          Photo/Video
        </Button>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        hidden
        onChange={handleFileUpload}
      />
    </div>
  )
}

export default CreateAPost
