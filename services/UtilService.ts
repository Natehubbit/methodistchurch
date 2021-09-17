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
  static getTitheStatus(
    month: number,
    amount: number | null,
  ) {
    if (amount) {
      return 'paid'
    }
    return 'unpaid'
  }
  static getAmount(value: number | null) {
    return value
      ? 'GHS' +
          value
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,')
      : null
  }
}
