import React from 'react'
import MyButton from './UI/button/MyButton';

const Postitem = (props) => {
    
  return (
    <div className="box-border">
        <div className="box-border border-2 border-blue-600 m-10 p-5">
          <strong>{props.number} {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
          <div className="flex justify-end">
            <MyButton onClick={() => props.remove(props.post)}>
              Delete
            </MyButton>
          </div>
        </div>
      </div>
  )
}

export default Postitem;