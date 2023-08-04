import React from 'react'

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input 
    ref={ref}
    {...props}
    className='border-2 border-black w-96'
    />
  )
});

export default MyInput;