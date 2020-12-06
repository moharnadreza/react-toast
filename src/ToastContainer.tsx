import React, { FC } from 'react'
import Toast from './Toast'
import './Toast.css'

interface IToast {}

const ToastContainer: FC<IToast> = () => {
  return (
    <>
      <div className="toastContainer">
        <Toast backgroundColor="#8900FF" />
        <Toast backgroundColor="#004FE3" />
        <Toast backgroundColor="#000000" />
        <Toast backgroundColor="#CC0056" />
      </div>
    </>
  )
}

export default ToastContainer
