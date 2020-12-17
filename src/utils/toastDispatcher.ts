import { emitter } from './'
import { Events, Toast } from '../types'
import { TAction } from '../hooks'

interface IToastDispatcher {
  dispatch: (value: TAction) => void
  delay?: number
}

export const toastDispatcher = ({ dispatch, delay }: IToastDispatcher) => {
  /** Add a new toast to currenct toasts. */
  emitter.on(Events.SHOW, (toast: Toast) => {
    dispatch({ type: 'ADD', toast })

    if (delay)
      setTimeout(() => {
        dispatch({ type: 'REMOVE', id: toast.id })
      }, delay)
  })

  /** Remove triggered toast from currenct toasts list. */
  emitter.on(Events.HIDE, (id: string) => dispatch({ type: 'REMOVE', id }))

  /** Remove all toasts. */
  emitter.on(Events.HIDE_ALL, () => dispatch({ type: 'REMOVE_ALL' }))
}
