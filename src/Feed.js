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

  function createPost(post) {
    setPosts((prevPosts) => [
      {
        name: "Bill Gates",
        avatar: require("./assets/bill.jpg"),
        post: post,
        comments: [],
      },
      ...prevPosts,
    ])
  }

  function addComment(index, comment) {
    const comments = [
      {
        name: "Bill Gates",
        avatar: require("./assets/bill.jpg"),
        comment: comment,
      },
      ...posts[index].comments,
    ]

    setPosts((prevPosts) => {
      const posts = [...prevPosts]
      posts[index].comments = comments
      return posts
    })
  }

  return (
    <div className="flex-grow max-w-xl mx-auto">
      <CreateAPost onSubmit={createPost} />
      {posts.map((post, i) => (
        <Post key={i} index={i} {...post} onSubmit={addComment} />
      ))}
    </div>
  )
}

export default Feed
