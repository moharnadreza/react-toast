import { Type, Toast } from 'types'

interface IToaster {
  type: Type
  content: string
}

export const toaster = ({ type, content }: IToaster): Toast => {
  return {
    // TODO: use shortid
    id: Math.random()
      .toFixed(5)
      .toString(),
    content,
    type,
  }
}
