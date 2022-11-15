import React from "react"

function Avatar({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={"xl:inline h-10 w-10 rounded-full " + className}
    ></img>
  )
}

export default Avatar
