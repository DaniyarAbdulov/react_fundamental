import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title: '', body:''})
      }
  return (
    <form className="flex flex-col m-10 gap-1 items-start">
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title:e.target.value})}
          type="text"
          placeholder="Post Name"/>

        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body:e.target.value})}
          type="text"
          placeholder="Post Description"/>
        <MyButton onClick={addNewPost}>Share!+</MyButton>
      </form>
  )
}

export default PostForm;