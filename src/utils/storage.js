export const setToLS = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLS = key => {
  const value = window.localStorage.getItem(key)
  return !!value ? JSON.parse(value) : null
}
