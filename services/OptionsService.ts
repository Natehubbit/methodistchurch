import {db} from '../common/config'
import {FORM} from '../common/constants'
import {OptionsType} from '../types/index'
import {Alert} from 'react-native'

const OrgsRef = db.collection('organisations')
const CategoryRef = db.collection('categories')

export default class OptionsService {
  static async loadOrganizations(): Promise<
    string[] | null
  > {
    try {
      const res = await OrgsRef.get()
      return (<unknown>(
        res.docs.map((d) => d.data().name)
      )) as string[]
    } catch (e) {
      console.error(e)
      return null
    }
  }

  static async loadCategories() {
    try {
      const res = await CategoryRef.get()
      return res.docs.map(
        (d) => (<unknown>d.data().name) as string,
      )
    } catch (e) {
      console.error(e)
      return null
    }
  }
  static async loadAll(): Promise<OptionsType | null> {
    try {
      const orgs = await this.loadOrganizations()
      const cats = await this.loadCategories()
      return {
        organisations: orgs || [],
        categories: cats || [],
      }
    } catch (e) {
      console.error(e)
      return null
    }
  }

  static async addCategory(val: string) {
    try {
      await CategoryRef.add({name: val})
      return true
    } catch (e) {
      console.error(e)
      return null
    }
  }

  static async addOrganisation(val: string) {
    try {
      await OrgsRef.add({name: val})
      return true
    } catch (e) {
      console.error(e)
      return null
    }
  }

  static async populateOptions() {
    try {
      const orgs = FORM.Organisation.values
      const cats = FORM.Category.values
      const orgsRes = orgs.map((o) => {
        return this.addOrganisation(o)
      })
      const catsRes = cats.map((o) => {
        return this.addCategory(o)
      })
      await Promise.all(catsRes)
      await Promise.all(orgsRes)
      Alert.alert('Success', 'Data has been populated')
      return true
    } catch (e) {
      Alert.alert('Failed', 'Failed to  populated')
      console.error(e)
      return false
    }
  }
}
