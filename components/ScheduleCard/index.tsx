import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {
  Caption,
  Colors,
  Paragraph,
  Subheading,
  Title,
} from 'react-native-paper'

interface ScheduleCardProps {
  title: string
  summary: string
}

const ScheduleCard: FC<ScheduleCardProps> = ({
  title,
  summary,
}) => {
  return (
    <View style={styles.container}>
      <Subheading>{title}</Subheading>
      <Caption>{summary}</Caption>
    </View>
  )
}

export default ScheduleCard

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey300,
    padding: 15,
    backgroundColor: Colors.white,
  },
})
