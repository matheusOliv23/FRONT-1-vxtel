export const plansByLocale = (
  qtdMinutes: number,
  typePlan: number,
  dddOrigin: string,
  dddDest: string,
) => {
  let valueWithPlan = 0
  let valueWithoutPlan = 0
  const valuePerMinute = [1.9, 2.9, 1.7, 2.7, 0.9, 1.9]

  const calculatePlanValue = (
    qtdMinutes: number,
    typePlan: number,
    valuePerMinute: number,
  ) => {
    if (qtdMinutes <= typePlan) {
      valueWithPlan = 0
    }
    if (qtdMinutes > typePlan) {
      const excess = qtdMinutes - typePlan
      valueWithPlan = excess * (valuePerMinute + (1 / 10) * valuePerMinute)
    }
    valueWithoutPlan = qtdMinutes * valuePerMinute

    return { valueWithPlan, valueWithoutPlan }
  }

  if (dddOrigin === '011' && dddDest === '016') {
    calculatePlanValue(qtdMinutes, typePlan, valuePerMinute[0])
  }
  if (dddOrigin === '016' && dddDest === '011') {
    calculatePlanValue(qtdMinutes, typePlan, valuePerMinute[1])
  }
  if (dddOrigin === '011' && dddDest === '017') {
    calculatePlanValue(qtdMinutes, typePlan, valuePerMinute[2])
  }
  if (dddOrigin === '017' && dddDest === '011') {
    calculatePlanValue(qtdMinutes, typePlan, valuePerMinute[3])
  }
  if (dddOrigin === '011' && dddDest === '018') {
    calculatePlanValue(qtdMinutes, typePlan, valuePerMinute[4])
  }
  if (dddOrigin === '018' && dddDest === '011') {
    calculatePlanValue(qtdMinutes, typePlan, valuePerMinute[5])
  }

  return { valueWithPlan, valueWithoutPlan }
}
