import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {ANNOUNCEMENTS} from '../../common/constants'
import BulletinItem from '../../components/BulletinItem'

const Bulletin = () => {
  return (
    <ScrollView>
      {Object.entries(ANNOUNCEMENTS).map(([key, value]) => {
        return (
          <BulletinItem
            key={key}
            title={key}
            body={value}
          />
        )
      })}
    </ScrollView>
  )
}

export default Bulletin

const styles = StyleSheet.create({})
