import { useEffect, useState } from 'react'
import { getFromLS, setToLS } from '../utils/storage'
import { mapValues, values } from './../utils/utils'

export const useTheme = () => {
  const themes = getFromLS('all-themes')
  const [theme, setTheme] = useState(themes.data.light)
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode)
  }

  const getFonts = () => {
    const allFonts = values(mapValues(themes.data, 'font'))
    return allFonts
  }

  useEffect(() => {
    const localTheme = getFromLS('theme')
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light)
    setThemeLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { theme, themeLoaded, setMode, getFonts }
}
