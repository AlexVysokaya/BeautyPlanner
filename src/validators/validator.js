export const required = value => {
  if (value) {
    return undefined
  }
  return '*обязательное поле'
}

const minLength = (min) => (value) => {
  if (value && value.length < min) return `*минимальное кол-во символов: ${min}`
  return undefined
}

export const minLength10 = minLength(10)
export const minLength8 = minLength(8)
