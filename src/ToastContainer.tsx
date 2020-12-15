import React, { FC, useCallback, useEffect } from 'react'
import { Toast } from './components'
import { useToast } from './hooks'
import { emitter } from './utils'
import { Events } from './types'
import './Toast.css'

interface IToastContainer {}

const ToastContainer: FC<IToastContainer> = () => {
  const { toasts, dispatch } = useToast()

  // const delay = 10000

  useEffect(() => {
    // TODO: Move this stuff to toaster function
    emitter.on(Events.SHOW, (toast: any) => {
      dispatch({
        type: 'ADD',
        toast,
      })
    })
    emitter.on(Events.HIDE, (id: string) => {
      dispatch({
        type: 'REMOVE',
        id,
      })
    })
    emitter.on(Events.HIDE_ALL, () => {
      dispatch({
        type: 'REMOVE_ALL',
      })
    })
  }, [])

  const onClose = useCallback((id: string) => {
    emitter.emit(Events.HIDE, id)
  }, [])

  return (
    <div className="toastContainer">
      {toasts.map((toast, i) => (
        <Toast key={i} {...toast} onClose={onClose} />
      ))}
    </div>
  )
}

export default ToastContainer
