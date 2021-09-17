import React, {FC} from 'react'
import {Dimensions, StyleSheet, Text} from 'react-native'
import {TouchableRipple} from 'react-native-paper'
import {LinearGradient} from 'expo-linear-gradient'
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

const {width, height} = Dimensions.get('window')

interface DashButtonProps {
  text: string
  gradient: readonly [string, string]
  icon: string
  onPress?: () => void
}

const DashButton: FC<DashButtonProps> = ({
  text,
  gradient,
  icon,
  onPress,
}) => {
  const {navigate} = useNavigation()
  const onSelect = () => {
    onPress && onPress()
    navigate(text as any)
  }
  return (
    <LinearGradient
      style={style.root}
      colors={gradient as any}
      start={{x: -1.15, y: -0.93}}
      end={{x: 1.16, y: 0.92}}>
      <TouchableRipple
        style={[style.container]}
        onPress={onSelect}>
        <>
          <Icon color='#fff' size={60} name={icon as any} />
          <Text style={style.text}>{text}</Text>
        </>
      </TouchableRipple>
    </LinearGradient>
  )
}

export default DashButton

const style = StyleSheet.create({
  root: {
    borderRadius: 15,
  },
  container: {
    padding: 10,
    width: width * 0.38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
