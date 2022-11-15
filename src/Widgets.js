import React from "react"
import Avatar from "./Avatar"
import {
  VideoCameraIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"

const contacts = [
  { name: "Arnold", src: require("./assets/arnold.jpg") },
  { name: "Robert Downey Jr", src: require("./assets/robert.jpg") },
  { name: "Samuel L Jackson", src: require("./assets/sam.jpg") },
  { name: "Taylor Swift", src: require("./assets/taylor.jpg") },
  { name: "Dwayne Johnson", src: require("./assets/dwayne.jpg") },
]

const Widgets = () => {
  return (
    <div className="flex flex-col gap-2 mr-2 mt-2 min-w-[20rem] max-w-sm">
      <ContactsHeader>Contacts</ContactsHeader>
      {contacts.map((contact, i) => (
        <Contact key={i} name={contact.name} src={contact.src} />
      ))}
    </div>
  )
}

function ContactsHeader({ children }) {
  return (
    <div className="h-10 pl-2 flex items-center mb">
      <span className="mr-auto text-sm font-bold">{children}</span>
      <VideoCameraIcon className="h-9 p-2 hover:bg-gray-300 rounded-full" />
      <MagnifyingGlassIcon className="h-9 p-2 hover:bg-gray-300 rounded-full" />
      <EllipsisHorizontalIcon className="h-9 p-2 hover:bg-gray-300 rounded-full" />
    </div>
  )
}

function Contact({ name, src }) {
  return (
    <div className="flex items-center gap-3 p-1 pl-2 hover:bg-gray-300 rounded-xl">
      <Avatar src={src} className="h-8 w-8"></Avatar>
      <span className="w-fit">{name}</span>
    </div>
  )
}

export default Widgets
