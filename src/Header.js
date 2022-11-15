import React from "react"
import Logo from "./Logo"
import Avatar from "./Avatar"

import {
  HomeIcon,
  UserGroupIcon,
  VideoCameraIcon,
  BuildingStorefrontIcon,
  PuzzlePieceIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <div className="flex items-center bg-white px-4 py-1 border-b-2 sticky top-0 z-10 [&>*]:flex-1">
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </div>
  )
}

export const HeaderIcon = ({ Icon, active }) => {
  return (
    <Icon
      className={`flex-1 cursor-pointer h-14 p-3 sm:hover:bg-gray-200 hover:border-b text-black-500 rounded-xl active:border-b-2 active:border-blue-500 hover:text-blue-500 ${
        active && "text-blue-500"
      }`}
    ></Icon>
  )
}

function HeaderLeft() {
  return (
    <div className="flex justify-start items-center">
      <div className="mr-2">
        <Logo></Logo>
      </div>
      <div className="flex items-center bg-gray-100 rounded-full">
        <MagnifyingGlassIcon className="h-10 p-3 md:pr-0 text-gray-500"></MagnifyingGlassIcon>
        <input
          type="text"
          placeholder="Search Facebook"
          className="hidden md:inline h-10 p-2 w-40 bg-transparent placeholder:text-gray-400 placeholder:font-light outline-none"
        ></input>
      </div>
    </div>
  )
}

function HeaderMiddle() {
  return (
    <div className="flex justify-center items-center">
      <HeaderIcon Icon={HomeIcon} active={true} />
      <HeaderIcon Icon={UserGroupIcon} />
      <HeaderIcon Icon={VideoCameraIcon} />
      <HeaderIcon Icon={BuildingStorefrontIcon} />
      <HeaderIcon Icon={PuzzlePieceIcon} />
    </div>
  )
}

function HeaderRight() {
  return (
    <div className="flex justify-end items-center space-x-2">
      <Bars3Icon className="hidden md:inline h-10 p-3 bg-gray-100 rounded-full" />
      <BellIcon className="hidden md:inline h-10 p-3 bg-gray-100 rounded-full" />
      <ChatBubbleLeftEllipsisIcon className="hidden md:inline h-10 p-3 bg-gray-100 rounded-full" />
      <Avatar src={require("./assets/bill.jpg")} alt="Bill Gates" />
    </div>
  )
}

export default Header
