import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {Headline} from 'react-native-paper'
import {SERVICE} from '../../common/constants'
import ScheduleCard from '../../components/ScheduleCard'

const Service = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.entries(SERVICE).map(([key, value]) => {
          return (
            <ScheduleCard
              key={key}
              title={key}
              summary={value}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  head: {
    marginBottom: 20,
  },
  container: {},
})
