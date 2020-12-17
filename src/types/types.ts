export enum Events {
  SHOW = 'show',
  HIDE = 'hide',
  HIDE_ALL = 'hideAll',
}

export type Type = 'default' | 'success' | 'error' | 'info' | 'warning'

export type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type ToastContent = string

export type ToastConfig = {
  backgroundColor?: string
  color?: string
}

export interface Toast {
  id: string
  content: ToastContent
  type: Type
  config?: ToastConfig
}

export interface ToastProvider {
  content: ToastContent
  config?: ToastConfig
}
