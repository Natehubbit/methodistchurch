import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {List} from 'react-native-paper'
import {COLORS} from '../../common/theme'

interface AccordionProps {
  title?: string
  description?: string
}

const Accordion: FC<AccordionProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.accordionRoot}>
      <List.Accordion
        style={styles.accordion}
        title={title}>
        <View style={styles.body}>
          <Text>{description}</Text>
        </View>
      </List.Accordion>
    </View>
  )
}

export default Accordion

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: COLORS.white,
  },
  accordionRoot: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  body: {
    padding: 20,
  },
})
