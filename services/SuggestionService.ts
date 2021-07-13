import {Alert} from 'react-native'
import {db} from '../common/config'
import {IForm} from '../types'

const SuggestionRef = db.collection('suggestion')

export default class SuggestionService {
  static async postData(data: IForm) {
    try {
      await SuggestionRef.add({
        ...data,
        timestamp: new Date(),
      })
      return true
    } catch (e) {
      Alert.alert(e.message)
      return false
    }
  }
}
