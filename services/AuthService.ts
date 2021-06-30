import {auth} from '../common/config'
import UtilService from './UtilService'
import {Alert} from 'react-native'

export default class AuthService {
  static async loginAnon() {
    try {
      const res = await auth.signInAnonymously()
      res?.user?.uid &&
        (await UtilService.persistData(
          'uid',
          res?.user?.uid,
        ))
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }

  // static async authListen(
  //   callback: (val: boolean) => void,
  // ) {
  //   try {
  //     auth.onAuthStateChanged(async (user) => {
  //       if (user) {
  //         await UtilService.persistData('uid', user.uid)
  //         callback(true)
  //       } else {
  //         await UtilService.deleteData('uid')
  //         callback(false)
  //       }
  //     })
  //   } catch (e) {
  //     Alert.alert(
  //       'Auth Failed!!',
  //       'Failed to login anonymously',
  //     )
  //     return null
  //   }
  // }
}
