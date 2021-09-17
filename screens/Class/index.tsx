import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {List} from 'react-native-paper'
import {CLASSES} from '../../common/constants'
import {COLORS} from '../../common/theme'
import Accordion from '../../components/Accordion'

const Class = () => {
  return (
    <ScrollView>
      {Object.entries(CLASSES).map(([key, value]) => {
        return (
          <Accordion
            key={key}
            description={value}
            title={key}
          />
        )
      })}
    </ScrollView>
  )
}

export default Class

const styles = StyleSheet.create({})
