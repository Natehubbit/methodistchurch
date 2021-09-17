import React from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
} from 'react-native'
import bck from '../../assets/back.jpg'
import {DASH_BUTTONS} from '../../common/constants'
import DashButton from '../../components/DashButton'

const Home = () => {
  const data = Object.keys(
    DASH_BUTTONS,
  ) as (keyof typeof DASH_BUTTONS)[]
  return (
    <View style={style.container}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={bck as any}
      />
      <FlatList
        data={data}
        centerContent
        renderItem={({item}) => {
          const {gradient, icon} = DASH_BUTTONS[item]
          return (
            <DashButton
              gradient={gradient}
              text={item}
              icon={icon}
            />
          )
        }}
        numColumns={2}
        keyExtractor={(item) => item}
        columnWrapperStyle={style.btnList}
      />
    </View>
  )
}

export default Home

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnList: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
})
