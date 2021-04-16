import React, {useState} from 'react'
import {ActionType, SnackbarType} from '../types'

const useSnackbar = () => {
  const [show, setShow] = useState(false)
  const [type, setType] = useState<SnackbarType>(null)
  const [action, setAction] = useState<ActionType>({
    action: '',
    text: '',
    onPress: () => {},
  })
  const showSnackbar = (
    type: SnackbarType,
    action: ActionType,
  ) => {
    setShow(true)
    setType(type)
    setAction(action)
  }
  const hideSnackbar = () => {
    setShow(false)
  }
  return {
    showSnackbar,
    hideSnackbar,
    action,
    type,
    show,
  }
}

export default useSnackbar
