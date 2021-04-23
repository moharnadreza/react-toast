import React, { FC } from 'react'
import { Close } from '../Icons'
import { Toast as ToastType } from '../../types'
import { toastIcon as Icon } from './ToastIcon'
import './Toast.css'

export interface IToast extends ToastType {
  onClose: (id: string) => void
}

const Toast: FC<IToast> = ({
  id,
  content,
  type,
  config: { backgroundColor, color } = {},
  onClose,
}) => {
  return (
    <div className={`toast ${type}`} style={{ backgroundColor }}>
      <div className="icon">{Icon({ type })}</div>
      <div className="content">
        <p style={{ color }}>{content}</p>
      </div>
      <div className="close" onClick={() => onClose(id)}>
        <Close />
      </div>
    </div>
  )
}

export default Toast
