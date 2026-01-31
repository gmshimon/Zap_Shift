// utils/toastUtils.js
import { toast } from 'react-toastify'

type ToastOptions = {
  position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'
  autoClose?: number | false
  hideProgressBar?: boolean
  closeOnClick?: boolean
  pauseOnHover?: boolean
  draggable?: boolean
  progress?: number
  theme?: 'light' | 'dark' | 'colored'
}

const toastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
}

export const showSuccessToast = (message: string) => {
  toast.success(message, toastOptions)
}

export const showErrorToast = (message: string) => {
  toast.error(message, toastOptions)
}

export const showInfoToast = (message: string) => {
  toast.info(message, toastOptions)
}

export const showWarningToast = (message: string) => {
  toast.warn(message, toastOptions)
}