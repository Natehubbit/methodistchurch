import React, {
  FC,
  useContext,
  useRef,
  useState,
} from 'react'
import {StyleSheet, View} from 'react-native'
import {
  Button,
  Colors,
  Headline,
  Paragraph,
  Surface,
  TextInput,
} from 'react-native-paper'
import {FORM} from '../../common/constants'
import OptionsContext from '../../contexts/OptionsContext'
import SuggestionService from '../../services/SuggestionService'
import {ActionType, IForm, SnackbarType} from '../../types'
import Selector from '../Selector'
import TextArea from '../TextArea'

interface FormProps {
  onCloseAlert: () => void
  onAlert: (type: SnackbarType, action: ActionType) => void
}

const Form: FC<FormProps> = ({onAlert, onCloseAlert}) => {
  const {
    options: {categories, organisations},
  } = useContext(OptionsContext)
  const [submitting, setSubmitting] = useState(false)
  let submitRef = useRef(false)
  const [form, setForm] = useState<IForm>({
    age: '',
    organisation: '',
    suggestion: '',
    category: '',
  })
  const [formErrors, setFormErrors] = useState<IForm>({
    age: '',
    organisation: '',
    suggestion: '',
    category: '',
  })
  const resetErrors = () => {
    setFormErrors({
      age: '',
      organisation: '',
      suggestion: '',
      category: '',
    })
  }
  const resetForm = () => {
    setForm({
      age: '',
      organisation: '',
      suggestion: '',
      category: '',
    })
  }
  const onSuccess = () => {
    onAlert('success', {
      action: 'Okay',
      onPress: onCloseAlert,
      text: 'Thanks and God bless you',
    })
  }
  const onFail = () => {
    onAlert('error', {
      action: 'Retry',
      onPress: onSubmit,
      text: 'An error occured...',
    })
  }
  const onValidate = () => {
    const errorObject: IForm = {
      age: '',
      organisation: '',
      suggestion: '',
      category: '',
    }
    Object.keys(form).forEach((k) => {
      const key = k as keyof IForm
      const val = form[key]
      if (!!!val) {
        errorObject[key] = `"${key}" field is required*`
      }
    })
    setFormErrors(errorObject)
    return Object.values(errorObject).every((v) => !!!v)
  }
  const onValChange = (name: keyof IForm, val: string) => {
    setForm((f) => ({...f, [name]: val}))
    if (val) {
      setFormErrors((e) => ({...e, [name]: ''}))
    }
  }
  const onSubmit = async () => {
    submitRef.current = true
    setSubmitting(true)
    resetErrors()
    const isValid = onValidate()
    if (isValid) {
      const res = await SuggestionService.postData(form)
      if (res) {
        onSuccess()
        resetForm()
      } else {
        onFail()
      }
    }
    setSubmitting(false)
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.info}>
        <Headline>Dearly Beloved,</Headline>
        <Paragraph>
          What is your kind suggestion for today?
        </Paragraph>
      </View>
      {Object.keys(FORM).map((k) => {
        const key = k as keyof typeof FORM
        const keyVal = key.toLowerCase() as keyof IForm
        const {type, values} = FORM[key]
        const error = formErrors[keyVal]
        const hasError = !!error && submitRef.current
        const isOrganisation =
          key === 'Organisation' && organisations.length > 0
        const isCategory =
          key === 'Category' && categories.length > 0
        let selectorValues: string[] | null = null
        if (isOrganisation) {
          selectorValues = organisations || values
        }
        if (isCategory) {
          selectorValues = categories || values
        }
        return type === 'text' ? (
          <View style={styles.input} key={key}>
            <TextArea
              mode='outlined'
              label={key}
              value={form[keyVal]}
              style={[styles.textArea, styles.input]}
              multiline
              numberOfLines={5}
              onChangeText={(val) =>
                onValChange(keyVal, val)
              }
              right={
                <TextInput.Icon
                  name='comment-text-multiple-outline'
                  color='grey'
                />
              }
            />
            {hasError && (
              <Paragraph style={styles.error}>
                {error}
              </Paragraph>
            )}
          </View>
        ) : (
          <View style={styles.input} key={key}>
            <Selector
              name={keyVal}
              onChange={onValChange}
              value={form[keyVal]}
              values={selectorValues || values || []}
              placeholder={key}
              key={key}
            />
            {hasError && (
              <Paragraph style={styles.error}>
                {error}
              </Paragraph>
            )}
          </View>
        )
      })}
      <View style={styles.footer}>
        <Button
          disabled={submitting}
          onPress={onSubmit}
          mode='contained'
          loading={submitting}>
          Submit
        </Button>
      </View>
    </Surface>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    borderRadius: 5,
    paddingVertical: '5%',
  },
  input: {
    marginBottom: 15,
  },
  textArea: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  info: {
    marginBottom: 30,
  },
  error: {
    color: Colors.red500,
  },
  footer: {
    marginBottom: 15,
  },
})
