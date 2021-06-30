import AsyncStorage from '@react-native-async-storage/async-storage'
export default class UtilService {
  static async persistData(key: string, value: any) {
    await AsyncStorage.setItem(key, value)
  }
  static async deleteData(key: string) {
    await AsyncStorage.removeItem(key)
  }
  static async getData(key: string) {
    return await AsyncStorage.getItem(key)
  }
}
