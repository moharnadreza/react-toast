import { emitter } from './emitter'
import { Events, Toast } from '../types'
import { TAction } from '../hooks'

interface IToastDispatcher {
  dispatch: (value: TAction) => void
  delay?: number
}

export const toastDispatcher = ({ dispatch, delay }: IToastDispatcher) => {
  emitter.on(Events.SHOW, (toast: Toast) => {
    dispatch({ type: 'ADD', toast })

    if (delay)
      setTimeout(() => {
        dispatch({ type: 'REMOVE', id: toast.id })
      }, delay)
  })

  emitter.on(Events.HIDE, (id: string) => dispatch({ type: 'REMOVE', id }))

  emitter.on(Events.HIDE_ALL, () => dispatch({ type: 'REMOVE_ALL' }))
}
