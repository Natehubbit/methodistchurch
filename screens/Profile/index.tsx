import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  Colors,
  FAB,
  TextInput,
  Title,
  TouchableRipple,
} from 'react-native-paper'
import {COLORS, theme} from '../../common/theme'

const {height, width} = Dimensions.get('window')

const Profile = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.img}
          source={{uri: 'https://i.pravatar.cc/300'}}
        />
        <View style={styles.form}>
          <TextInput
            placeholder='Name'
            style={styles.input}
          />
          <TextInput
            placeholder='Email'
            style={styles.input}
          />
          <TextInput
            placeholder='Age'
            style={styles.input}
          />
        </View>
      </ScrollView>
      <TouchableRipple style={styles.save}>
        <Title style={styles.saveText}>Save</Title>
      </TouchableRipple>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    paddingTop: '10%',
  },
  img: {
    height: height * 0.25,
    width: height * 0.25,
    borderRadius: height,
    alignSelf: 'center',
  },
  fab: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  form: {
    marginVertical: 40,
    paddingHorizontal: 30,
  },
  input: {
    marginBottom: 15,
  },
  save: {
    backgroundColor: theme.colors.primary,
  },
  saveText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
})
