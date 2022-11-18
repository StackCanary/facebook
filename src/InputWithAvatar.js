import React, { useState } from "react"
import Avatar from "./Avatar"

const InputWithAvatar = ({ placeholder, addPost }) => {
  const [value, setValue] = useState("")

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    addPost({
      name: "Bill Gates",
      avatar: require("./assets/bill.jpg"),
      post: value,
      comments: [],
    })

    setValue("")
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <Avatar src={require("./assets/bill.jpg")} alt="Bill Gates" />
      <input
        type="text"
        className="flex-auto rounded-full h-10 p-2 bg-gray-100 hover:bg-gray-200"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></input>
    </form>
  )
}

export default InputWithAvatar
