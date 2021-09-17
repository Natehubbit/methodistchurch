import React, {useEffect, useState} from 'react'

export const useSummary = (
  text: string,
  summarize: boolean,
) => {
  const [summary, setSummary] = useState<string>()
  const [summarized, setSummarized] = useState(false)
  useEffect(() => {
    if (text.length > 100) {
      setSummary(text.substring(0, 100))
      setSummarized(true)
    } else {
      setSummarized(false)
    }
  }, [])
  useEffect(() => {
    if (summarize) {
      setSummary(text.substring(0, 100))
    } else {
      setSummary(text)
    }
  }, [summarize])
  return {summary, summarized}
}
