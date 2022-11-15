import React from "react"
import Avatar from "./Avatar"

const InputWithAvatar = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar src={require("./assets/bill.jpg")} alt="Bill Gates" />
      <input
        type="text"
        className="flex-auto rounded-full h-10 p-2 bg-gray-100 hover:bg-gray-200"
        placeholder={placeholder}
      ></input>
    </div>
  )
}

export default InputWithAvatar
