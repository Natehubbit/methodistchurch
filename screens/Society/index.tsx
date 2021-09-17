import React from 'react'
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {FORM} from '../../common/constants'
import SocietyCard from '../../components/SocietyCard'

const {height, width} = Dimensions.get('window')

const Society = () => {
  const data = FORM['Organisation'].values
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(i) => i}
        renderItem={({item}) => {
          return <SocietyCard label={item} />
        }}
      />
    </View>
  )
}

export default Society

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
