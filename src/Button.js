import React from "react"

const Button = ({ Icon, children, onClick = undefined }) => {
  return (
    <button
      className="flex-1 flex items-center justify-center gap-2 p-1 hover:bg-gray-200 rounded-lg"
      onClick={onClick}
    >
      {Icon && <Icon className="h-6" />} {children}
    </button>
  )
}

export default Button
