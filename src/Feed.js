import { React, useState } from "react"
import Post from "./Post"
import CreateAPost from "./CreateAPost"

const defaultPosts = [
  {
    name: "Bill Gates",
    avatar: require("./assets/bill.jpg"),
    post: "Hello World!",
    comments: [
      {
        name: "Bill Gates",
        avatar: require("./assets/bill.jpg"),
        comment: "Hello, this is a comment!",
      },
      {
        name: "Bill Gates",
        avatar: require("./assets/bill.jpg"),
        comment: "Hello, this is a comment!",
      },
    ],
  },
  {
    name: "Taylor Swift",
    avatar: require("./assets/taylor.jpg"),
    post: "Hello World!",
    comments: [
      {
        name: "Bill Gates",
        avatar: require("./assets/bill.jpg"),
        comment: "Hello, this is a comment!",
      },
    ],
  },
  {
    name: "Robert Downey Jr",
    avatar: require("./assets/robert.jpg"),
    post: "Hello World!",
    comments: [
      {
        name: "Taylor Swift",
        avatar: require("./assets/taylor.jpg"),
        comment: "Hello, this is a comment!",
      },
      {
        name: "Dwayne Johnson",
        avatar: require("./assets/dwayne.jpg"),
        comment: "Hello, this is a comment!",
      },
    ],
  },
]

function Feed() {
  const [posts, setPosts] = useState(defaultPosts)

  function addPost(post) {
    setPosts((prevPost) => [post, ...prevPost])
  }

  return (
    <div className="flex-grow max-w-xl mx-auto">
      <CreateAPost addPost={addPost} />
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </div>
  )
}

export default Feed
