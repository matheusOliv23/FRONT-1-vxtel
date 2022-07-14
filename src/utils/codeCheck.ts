export const checkZeroIncluded = (values: string[]) => {
  const value = values.map((value) => {
    const isZeroIncluded = value.includes('0')

    if (!isZeroIncluded) {
      const formattedValue = `0${value}`
      return formattedValue
    }

    return value
  })

  return value
}

export const codeCheck = (origin: string, destiny: string) => {
  const codes = ['011016', '016011', '011017', '017011', '011018', '018011']

  const [originFormatted, destinyFormatted] = checkZeroIncluded([
    origin,
    destiny,
  ])

  const code = originFormatted + destinyFormatted

  const isCodeIncluded = codes.includes(code)

  if (isCodeIncluded) {
    return
  } else {
    const message =
      'Os valores digitados não correspondem a um dos nossos planos'

    return message
  }
}
