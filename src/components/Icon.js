import React from 'react'

function Icon({ iconClass }) {
  return (
    <div className="icon">
      <i class={`${iconClass}`}></i>
    </div>
  )
}

export default Icon
