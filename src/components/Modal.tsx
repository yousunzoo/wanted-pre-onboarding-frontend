import React from 'react'

interface ModalProps {
  message:string
}
function Modal({message}:ModalProps) {
  return (
    <div>{message}</div>
  )
}

export default Modal