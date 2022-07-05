import { plansByLocale } from './plansByLocale'

export const plansList = (
  dddOrigin: string,
  dddDest: string,
  qtdMinutes: number,
  typePlan: number,
) => {
  let finalValueWithPlan = 0
  let finalValueWithoutPlan = 0

  const { valueWithPlan, valueWithoutPlan } = plansByLocale(
    qtdMinutes,
    typePlan,
    dddOrigin,
    dddDest,
  )

  finalValueWithPlan = valueWithPlan
  finalValueWithoutPlan = valueWithoutPlan
  return { finalValueWithPlan, finalValueWithoutPlan }
}
