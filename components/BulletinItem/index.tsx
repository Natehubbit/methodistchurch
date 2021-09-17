import React, {FC, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {
  Colors,
  Paragraph,
  Subheading,
  Text,
  Title,
} from 'react-native-paper'
import {COLORS} from '../../common/theme'
import {useSummary} from '../../hooks/useSummary'

interface BulletinItemProps {
  title: string
  body: string
}

const BulletinItem: FC<BulletinItemProps> = ({
  title,
  body,
}) => {
  const [summarize, setSummarize] = useState(true)
  const {summarized, summary} = useSummary(body, summarize)
  const onToggle = () => {
    setSummarize((s) => !s)
  }
  return (
    <View style={styles.container}>
      <Subheading>{title}</Subheading>
      <Paragraph>
        {summary}{' '}
        {summarized && (
          <>
            {summarize ? (
              <Text onPress={onToggle} style={styles.more}>
                see more
              </Text>
            ) : (
              <Text onPress={onToggle} style={styles.more}>
                see less
              </Text>
            )}
          </>
        )}
      </Paragraph>
    </View>
  )
}

export default BulletinItem

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderColor: Colors.grey300,
  },
  more: {
    color: Colors.blue500,
  },
})
