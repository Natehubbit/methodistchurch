import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {TITHE} from '../../common/data'
import TitheCard from '../../components/TitheCard'
import UtilService from '../../services/UtilService'

const Tithe = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {TITHE.map((t, i) => {
          const status = UtilService.getTitheStatus(
            t.id,
            t.amount,
          )
          return (
            <TitheCard
              key={i}
              month={t.id}
              amount={t.amount}
              status={status}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Tithe

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  year: {
    // padding: 10,
    alignSelf: 'center',
  },
})
