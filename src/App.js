import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' },
    { id: 4, title: 'JavaScript', body: 'Description' },

  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="m-5">
      <PostForm create={createPost} />
      {posts.length !== 0
        ? <PostList 
          remove={removePost}
          posts={posts} 
          header="JS Posts!!" />
        : <div className="flex justify-center font-mono text-3xl">
          No Posts sofare!
        </div>}

    </div>

  );
}

export default App;
