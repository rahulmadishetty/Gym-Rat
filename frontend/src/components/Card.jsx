import React from 'react'

const Card = ({ children, className }) => {
  return (
    <div className={`card`}>
      <div className={`content ${className}`}>
        {children}
      </div></div>
  )
}

export default Card