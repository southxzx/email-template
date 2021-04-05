import React from 'react'

const Button = (props) => {

  const { href, name } = props

  return (
    <button className="btn" href={href}>
      {name}
    </button>
  )
}

export default Button
