import React, { FC, useCallback, useEffect } from 'react'
import { Toast } from './components'
import { useToast } from './hooks'
import { emitter, Events } from './utils'
import './Toast.css'

interface IToast {}

const event = emitter()

const ToastContainer: FC<IToast> = () => {
  const { toasts, dispatch } = useToast()

  useEffect(() => {
    // TODO: Move this stuff to toaster function
    event.on(Events.SHOW, (toast: string) => {
      dispatch({
        type: 'ADD',
        toast,
      })
    })
    event.on(Events.HIDE, (id: string) => {
      dispatch({
        type: 'REMOVE',
        id,
      })
    })
    event.on(Events.HIDE_ALL, () => {
      dispatch({
        type: 'REMOVE_ALL',
      })
    })
  }, [])

  const onClick = useCallback((id: string) => {
    event.emit(Events.HIDE, id)
  }, [])

  return (
    <>
      {/* TODO: Remove add and hideAll buttons */}
      <button
        onClick={() => {
          event.emit(
            Events.SHOW,
            // TODO: Create a util function to generate toast, maybe use shortid for id generation
            Math.random()
              .toFixed(2)
              .toString()
          )
        }}
      >
        Add new toast
      </button>
      <button
        onClick={() => {
          event.emit(Events.HIDE_ALL, [])
        }}
      >
        Hide all
      </button>
      <div className="toastContainer">
        {toasts.map((id, i) => (
          <Toast id={id} text={i.toString()} backgroundColor={`#8900FF`} onClick={onClick} />
        ))}
      </div>
    </>
  )
}

export default ToastContainer
