import React, { FC } from 'react'
import { Close, Success } from '../'
import { Position } from 'types'
import './Toast.css'

interface IToast {
  id: string
  content: string
  delay: number
  position?: Position
  onClose?: (id: string) => void
}

const Toast: FC<IToast> = ({
  id,
  content,
  // delay,
  // position = 'top-left',
  onClose = () => {},
}) => {
  return (
    <div className="toast info">
      <div className="icon">
        <Success />
      </div>
      <div className="content">
        <p>{`${id} - ${content}`}</p>
      </div>
      <div className="close" onClick={() => onClose(id)}>
        <Close />
      </div>
    </div>
  )
}

export default Toast
