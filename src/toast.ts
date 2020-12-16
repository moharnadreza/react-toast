import { emitter, toaster, Toaster } from './utils'
import { Events, ToastContent, ToastConfig } from './types'

const applyToast = ({ ...toast }: Toaster) => emitter.emit(Events.SHOW, toaster({ ...toast }))

const toast = (content: ToastContent, config?: ToastConfig) =>
  applyToast({ content, type: 'default', config })

toast.success = (content: ToastContent, config?: ToastConfig) =>
  applyToast({ content, type: 'success', config })

toast.error = (content: ToastContent, config?: ToastConfig) =>
  applyToast({ content, type: 'error', config })

toast.info = (content: ToastContent, config?: ToastConfig) =>
  applyToast({ content, type: 'info', config })

toast.warn = (content: ToastContent, config?: ToastConfig) =>
  applyToast({ content, type: 'warning', config })

toast.hideAll = () => emitter.emit(Events.HIDE_ALL)

export { toast }
