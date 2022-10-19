import React from 'react'

export default function Message(props) {
  return (
    <div>
        <h2>{props.username}:{props.text}</h2>
    </div>
  )
}
