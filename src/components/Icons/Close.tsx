import React from 'react'

const Close = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <g transform="translate(.077 .077)">
        <g>
          <path
            fill="#fff"
            d="M10.915 9.98l2.853-2.846a.666.666 0 00-.942-.942L9.979 9.044 7.133 6.191a.666.666 0 00-.942.942L9.044 9.98 6.19 12.826a.666.666 0 10.942.942l2.846-2.853 2.846 2.853a.666.666 0 10.942-.942z"
            transform="translate(-2.017 -2.018)"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default React.memo(Close)
