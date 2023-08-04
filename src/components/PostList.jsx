import React from 'react'
import Postitem from './Postitem'


const PostList = ({posts, header, remove}) => {
  return (
    <div>
    <h1 className="flex font-mono text-3xl justify-center">
        {header}
    </h1>
    {posts.map((post, index) =>
      <Postitem remove={remove} number={index +1} post={post} key={post.id}/> 
    
    )}</div>
  )
}

export default PostList