import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  Paragraph,
  Surface,
  Title,
  TouchableRipple,
} from 'react-native-paper'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import societyLogo from '../../assets/images/society.png'
import {FC} from 'react'

interface SocietyCardProps {
  label: string
}

const {height, width} = Dimensions.get('window')

const SocietyCard: FC<SocietyCardProps> = ({label}) => {
  return (
    <Surface>
      <TouchableRipple
        style={styles.container}
        onPress={() => console.log('by')}>
        <>
          <View style={styles.labelContainer}>
            <Image
              style={styles.logo}
              source={societyLogo as any}
            />
            <Paragraph
              numberOfLines={1}
              style={styles.label}>
              {label}
            </Paragraph>
          </View>

          {/* <Icon
            size={25}
            style={styles.icon}
            name='chevron-right'
          /> */}
        </>
      </TouchableRipple>
    </Surface>
  )
}

export default SocietyCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  icon: {
    opacity: 0.3,
  },
  label: {
    fontWeight: 'bold',
  },
  logo: {
    height: height * 0.07,
    width: height * 0.07,
    marginRight: 15,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
