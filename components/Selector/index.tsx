import React, {FC, useState} from 'react'
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {Menu, TouchableRipple} from 'react-native-paper'
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'
import {theme} from '../../common/theme'
import {IForm} from '../../types'

interface ISelector {
  values: readonly string[]
  value: string
  placeholder: string
  name: keyof IForm
  onChange: (key: keyof IForm, val: string) => void
}

interface IButton {
  placeholder: string
  value: string
  onPress: () => void
}

const Button: FC<IButton> = ({
  placeholder,
  value,
  onPress,
}) => {
  return (
    <TouchableRipple
      rippleColor={theme.colors.primary}
      style={[styles.container]}
      onPress={onPress}>
      <>
        {!!!value ? (
          <Text
            numberOfLines={1}
            style={[styles.placeholder]}>
            {placeholder}
          </Text>
        ) : (
          <Text numberOfLines={1} style={[styles.value]}>
            {value}
          </Text>
        )}
        <Icon name='chevron-down' color='grey' size={24} />
      </>
    </TouchableRipple>
  )
}

const Selector: FC<ISelector> = ({
  placeholder,
  values,
  value,
  name,
  onChange,
}) => {
  const [show, setShow] = useState(false)
  const onClose = () => {
    setShow(false)
  }
  const onPress = () => {
    setShow((s) => !s)
  }
  const onSelect = (key: keyof IForm, v: string) => {
    // setInputVal(v)
    onChange(key, v)
    onClose()
  }
  return (
    <Menu
      style={[styles.menu]}
      contentStyle={[styles.menuContent]}
      visible={show}
      onDismiss={onClose}
      anchor={
        <Button
          value={value}
          onPress={onPress}
          placeholder={placeholder}
        />
      }>
      <View style={{flex: 1}}>
        {values.map((v) => {
          return (
            <Menu.Item
              key={v}
              onPress={() => onSelect(name, v)}
              title={v}
            />
          )
        })}
      </View>
    </Menu>
  )
}

export default Selector

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
  },
  placeholder: {
    color: 'rgba(0,0,0,0.6)',
  },
  menu: {},
  menuContent: {},
  value: {
    color: '#000',
    fontSize: 16,
  },
})
