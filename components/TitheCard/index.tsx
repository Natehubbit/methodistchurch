import React, {FC} from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  Headline,
  Paragraph,
  Title,
} from 'react-native-paper'
import {COLORS} from '../../common/theme'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import UtilService from '../../services/UtilService'

interface TitheCardProps {
  status?: 'paid' | 'unpaid'
  month: number
  day?: string
  amount: number | null
}

const TitheCard: FC<TitheCardProps> = ({
  status,
  month,
  amount,
}) => {
  const isUnpaid = status === 'unpaid'
  const isPaid = status === 'paid'
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>28th </Text>
      <Headline style={styles.month}>
        {moment().month(month).format('MMM')}
      </Headline>
      <View style={styles.content}>
        {isPaid && (
          <>
            <Paragraph style={styles.amount}>
              {UtilService.getAmount(amount)}
            </Paragraph>
          </>
        )}
        {isUnpaid && (
          <>
            <Paragraph style={styles.unpaid}>--</Paragraph>
          </>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default TitheCard

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginBottom: 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  content: {
    justifyContent: 'flex-end',
    borderColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  amount: {
    // color: COLORS.green,
  },
  month: {
    marginRight: 20,
  },
  date: {
    color: COLORS.lightText,
    // position: 'absolute',
    // right: 0,
  },
  pending: {
    color: COLORS.brown,
  },
  unpaid: {
    color: COLORS.red,
  },
})
