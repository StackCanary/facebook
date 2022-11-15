import React, { useState } from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import {
  ChatBubbleLeftIcon,
  HandThumbUpIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline"
import InputWithAvatar from "./InputWithAvatar"

const Post = ({ name, avatar, post, comments }) => {
  const [showComments, setComments] = useState(false)

  function toggleComments() {
    setComments((toggled) => !toggled)
  }

  return (
    <div className="bg-gray-50 p-3 m-2 rounded-lg drop-shadow-md">
      <FbPostHeader name={name} avatar={avatar} age="13h" />
      <p className="mt-2">{post}</p>
      <FbPostReactions reactions={24} comments={comments.length} />
      <FbPostFooter toggleComments={toggleComments} />
      {showComments && <Comments comments={comments} />}
    </div>
  )
}

function Comments({ comments }) {
  return (
    <div className="mt-2 p-2">
      <InputWithAvatar placeholder="Write a comment" />
      {comments.map((comment, i) => (
        <Comment
          key={i}
          name={comment.name}
          avatar={comment.avatar}
          comment={comment.comment}
        ></Comment>
      ))}
    </div>
  )
}

function Comment({ name, avatar, comment }) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <Avatar src={avatar} alt="Bill Gates" />
      <p className="rounded-xl p-2 bg-gray-100 ">{comment}</p>
    </div>
  )
}

function FbPostHeader({ name, avatar, age }) {
  return (
    <div className="flex items-center">
      <Avatar src={avatar} alt={name} />
      <div className="mx-2 flex-auto flex items-center">
        <div className="text-sm">
          <div className="font-bold">{name}</div>
          <div>{age}</div>
        </div>
        <EllipsisHorizontalIcon className="ml-auto h-8 p-2 hover:bg-gray-200 rounded-full" />
      </div>
    </div>
  )
}

function FbPostReactions({ reactions, comments }) {
  return (
    <div className="flex my-2 mx-1 items-center text-xs text-gray-400">
      <HandThumbUpIcon className="h-4 inline font-light" />
      <HandThumbUpIcon className="h-4 inline font-light" />
      <HandThumbUpIcon className="h-4 inline font-light" />
      <span className="ml-1">{reactions}</span>
      {comments && <span className="ml-auto">{comments} comments</span>}
    </div>
  )
}

function FbPostFooter({ toggleComments }) {
  return (
    <div className="flex justify-evenly mt-2 gap-2">
      <Button Icon={HandThumbUpIcon}>Like</Button>
      <Button Icon={ChatBubbleLeftIcon} onClick={toggleComments}>
        Comment
      </Button>
      <Button Icon={ShareIcon}>Share</Button>
    </div>
  )
}

export default Post
