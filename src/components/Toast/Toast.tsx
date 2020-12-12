import React, { FC } from 'react'
import { Close, Info } from '../icons'
import '../../Toast.css'

interface IToast {
  id: string
  text: string
  backgroundColor: string
  onClick: (id: string) => void
}

const Toast: FC<IToast> = ({ id, backgroundColor, onClick }) => {
  return (
    <div className="toast" style={{ backgroundColor }}>
      <div className="icon">
        <Info />
      </div>
      <div className="text">
        <p>{id}</p>
      </div>
      <div className="close" onClick={() => onClick(id)}>
        <Close />
      </div>
    </div>
  )
}

export default Toast
