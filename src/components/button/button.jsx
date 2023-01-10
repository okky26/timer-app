import React from 'react'

const button = ({style, event, content,}) => {
  return (
    <>
      <button className={style} onClick={event}>{content}</button>
    </>
  )
}

export default button