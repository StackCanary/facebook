import React from "react"
import {
  VideoCameraIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  BookmarkIcon,
  FlagIcon,
  FilmIcon,
  NewspaperIcon,
  CalendarIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline"

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 ml-2 mt-2">
      <SideBarItem Icon={UserGroupIcon}>Find friends</SideBarItem>
      <SideBarItem Icon={BuildingStorefrontIcon}>Marketplace</SideBarItem>
      <SideBarItem Icon={VideoCameraIcon}>Watch</SideBarItem>
      <SideBarItem Icon={ClockIcon}>Memories</SideBarItem>
      <SideBarItem Icon={BookmarkIcon}>Saved</SideBarItem>
      <SideBarItem Icon={FlagIcon}>Pages</SideBarItem>
      <SideBarItem Icon={FilmIcon}>Reels</SideBarItem>
      <SideBarItem Icon={NewspaperIcon}>News</SideBarItem>
      <SideBarItem Icon={CalendarIcon}>Events</SideBarItem>
      <SideBarItem Icon={ChevronDownIcon}>See More</SideBarItem>
    </div>
  )
}

function SideBarItem({ children, Icon }) {
  return (
    <div className="flex items-center gap-3 pl-2 pr-48 hover:bg-gray-300 rounded-xl">
      <Icon className="h-10 py-2" />
      <span className="ml-2">{children}</span>
    </div>
  )
}

export default Sidebar
