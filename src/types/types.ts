export enum Events {
  SHOW = 'show',
  HIDE = 'hide',
  HIDE_ALL = 'hideAll',
}

export interface Toast {
  id: string
  content: string
  type: Type
}

export type Type = 'success' | 'error' | 'info' | 'warning'

export type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
