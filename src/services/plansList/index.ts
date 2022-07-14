import { plansByLocale } from './plansByLocale'
import { checkZeroIncluded } from 'utils/codeCheck'

export const plansList = (
  dddOrigin: string,
  dddDest: string,
  qtdMinutes: number,
  typePlan: number,
) => {
  const [originFormatted, destinyFormatted] = checkZeroIncluded([
    dddOrigin,
    dddDest,
  ])
  let finalValueWithPlan = 0
  let finalValueWithoutPlan = 0

  const { valueWithPlan, valueWithoutPlan } = plansByLocale(
    qtdMinutes,
    typePlan,
    originFormatted,
    destinyFormatted,
  )

  finalValueWithPlan = valueWithPlan
  finalValueWithoutPlan = valueWithoutPlan
  return { finalValueWithPlan, finalValueWithoutPlan }
}
