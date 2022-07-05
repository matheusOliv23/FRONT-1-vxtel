export const calculatePrice = (
  dddOrigin: string,
  dddDest: string,
  qtdMinutes: number,
  typePlan: number,
) => {
  let finalValueWithPlan = 0
  let finalValueWithoutPlan = 0

  if (dddOrigin === '011' && dddDest === '016') {
    if (qtdMinutes <= typePlan) {
      finalValueWithPlan = 0
    }

    if (qtdMinutes > typePlan) {
      const excedente = qtdMinutes - typePlan
      finalValueWithPlan = excedente * (1.9 + (1 / 10) * 1.9)
    }
    finalValueWithoutPlan = qtdMinutes * 1.9
  }

  if (dddOrigin === '016' && dddDest === '011') {
    if (qtdMinutes <= typePlan) {
      finalValueWithPlan = 0
    }

    if (qtdMinutes > typePlan) {
      const excedente = qtdMinutes - typePlan
      finalValueWithPlan = excedente * (2.9 + (1 / 10) * 2.9)
    }
    finalValueWithoutPlan = qtdMinutes * 2.9
  }

  if (dddOrigin === '011' && dddDest === '017') {
    if (qtdMinutes <= typePlan) {
      finalValueWithPlan = 0
    }

    if (qtdMinutes > typePlan) {
      const excedente = qtdMinutes - typePlan
      finalValueWithPlan = excedente * (1.7 + (1 / 10) * 1.7)
    }
    finalValueWithoutPlan = qtdMinutes * 1.7
  }

  if (dddOrigin === '017' && dddDest === '011') {
    if (qtdMinutes <= typePlan) {
      finalValueWithPlan = 0
    }

    if (qtdMinutes > typePlan) {
      const excedente = qtdMinutes - typePlan
      finalValueWithPlan = excedente * (2.7 + (1 / 10) * 2.7)
    }
    finalValueWithoutPlan = qtdMinutes * 2.7
  }

  if (dddOrigin === '011' && dddDest === '018') {
    if (qtdMinutes <= typePlan) {
      finalValueWithPlan = 0
    }

    if (qtdMinutes > typePlan) {
      const excedente = qtdMinutes - typePlan
      finalValueWithPlan = excedente * (0.9 + (1 / 10) * 0.9)
    }
    finalValueWithoutPlan = qtdMinutes * 0.9
  }

  if (dddOrigin === '018' && dddDest === '011') {
    if (qtdMinutes <= typePlan) {
      finalValueWithPlan = 0
    }

    if (qtdMinutes > typePlan) {
      const excedente = qtdMinutes - typePlan
      finalValueWithPlan = excedente * (1.9 + (1 / 10) * 1.9)
    }
    finalValueWithoutPlan = qtdMinutes * 1.9
  }

  return { finalValueWithPlan, finalValueWithoutPlan }
}
