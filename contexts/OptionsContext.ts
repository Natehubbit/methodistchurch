import React from 'react'
import {OptionsType} from '../types/index'

const OptionsContext = React.createContext<{
  options: OptionsType
}>({options: {categories: [], organisations: []}})

export default OptionsContext
