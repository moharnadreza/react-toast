import { emitter, toaster, Toaster } from './utils'
import { Events, ToastContent, ToastConfig } from './types'

const applyToast = ({ content, type, config }: Toaster) =>
  emitter.emit(
    Events.SHOW,
    toaster({
      content,
      type,
      config,
    })
  )

const toast = (content: ToastContent, config?: ToastConfig) =>
  applyToast({ content, type: 'default', config })

export { toast }
