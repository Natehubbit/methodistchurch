import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, withTheme } from 'react-native-paper'
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput'

interface ITextArea extends TextInputProps {

}

const TextArea: FC<ITextArea> = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.container]}
      mode='outlined'
      multiline
      numberOfLines={7}
    />
  )
}

export default withTheme(TextArea)

const styles = StyleSheet.create({
  container: {
    maxHeight: 120,
    fontSize: 16
  }
})
