import React from 'react'

function Icon({ iconClass }) {
  return (
    <div className="icon">
      <i className={`${iconClass}`}></i>
    </div>
  )
}

export default Icon
