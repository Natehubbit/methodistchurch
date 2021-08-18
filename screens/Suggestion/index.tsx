import React from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View
} from 'react-native'
import { Colors, Snackbar, TextInput } from 'react-native-paper'
import Form from '../../components/Form'
import Logo from '../../assets/logo.svg'
import logo from '../../assets/logo.jpeg'
import useSnackbar from '../../hooks/useSnackbar'

const bck = require('../../assets/back.jpg')

const { height, width } = Dimensions.get('window')

const Home = () => {
  const { type, action, showSnackbar, show, hideSnackbar } = useSnackbar()
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={styles.container}>
        <ImageBackground
          source={bck}
          style={styles.background}
        />
        <View style={styles.logoContainer}>
          <Logo height={height * 0.1} />
        </View>
        <Form onCloseAlert={hideSnackbar} onAlert={showSnackbar} />
      </ScrollView>
      <Snackbar
        onDismiss={hideSnackbar}
        visible={show}
        action={{
          label: action.action,
          onPress: action.onPress,
        }}
        style={{
          backgroundColor: type === 'error'
            ? Colors.red500
            : Colors.green500
        }}
        duration={Snackbar.DURATION_MEDIUM}
      >
        {action.text}
      </Snackbar>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    padding: 10
  },
  background: {
    height,
    width,
    position: 'absolute'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '12%'
  },
})
