import { FormEvent, useState, useEffect } from 'react'

import { Hero } from 'components/Hero'
import { Input } from 'components/Input'
import { PlanCard } from 'components/PlanCard'
import { plansMock } from 'components/PlanCard/mock'
import { Select } from 'components/Select'
import { SelectOptions } from 'components/Select/selectOptions'
import { Table } from 'components/Table'
import { Button } from 'components/Button'
import { plansList } from 'services/plansList'

import { setClass } from 'utils/setClass'
import { formatPrice } from 'utils/formatPrice'
import { codeCheck } from 'utils/codeCheck'

import styles from './styles.module.scss'

const initialValue = {
  origem: '',
  destino: '',
  tempo: 1,
  plano: '',
}

export const Main = () => {
  const [isShowTable, setIsShowTable] = useState(false)
  const [formValues, setFormValues] = useState(initialValue)
  const [tableContent, setTableContent] = useState<string[]>([])
  const [error, setError] = useState('')

  function handleChangeValue(name: string, value: string) {
    setFormValues({ ...formValues, [name]: value })
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()

    const { origem, destino, tempo, plano } = formValues

    const message = codeCheck(origem, destino)

    if (message) {
      setError(message)
      return
    }

    const { finalValueWithPlan, finalValueWithoutPlan } = plansList(
      origem,
      destino,
      tempo,
      Number(plano),
    )

    setTableContent([
      origem,
      destino,
      String(tempo),
      plano,
      String(formatPrice(finalValueWithPlan)),
      String(formatPrice(finalValueWithoutPlan)),
    ])

    setIsShowTable(true)
  }

  function handleBackForm() {
    setIsShowTable((prevState) => !prevState)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError('')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [error])

  const renderForm = () => {
    return (
      <div>
        <h2
          className={setClass(
            ['sectionTitle', 'formSectionTitle', 'container'],
            styles,
          )}
        >
          Calcule e saiba agora quanto você vai pagar em cada plano.
        </h2>

        <form onSubmit={handleSubmitForm}>
          <div className={setClass(['container', 'formWrapper'], styles)}>
            <Input
              value={formValues.origem}
              name="origem"
              labelName="Origem"
              placeholder="DDD de origem"
              onChange={(event) =>
                handleChangeValue(event.target.name, event.target.value)
              }
            />
            <Input
              value={formValues.destino}
              name="destino"
              labelName="Destino"
              placeholder="DDD de destino"
              onChange={(event) =>
                handleChangeValue(event.target.name, event.target.value)
              }
            />
            <Input
              value={formValues.tempo}
              name="tempo"
              type="number"
              labelName="Tempo"
              placeholder="Tempo em minutos"
              onChange={(event) =>
                handleChangeValue(event.target.name, event.target.value)
              }
            />
            <Select
              value={formValues.plano}
              name="plano"
              labelName="Plano FaleMais"
              options={SelectOptions}
              onChange={(event) =>
                handleChangeValue(event.target.name, event.target.value)
              }
            />

            {error && (
              <div className={styles.error}>
                <p>{error}</p>
              </div>
            )}

            <Button type="submit" size="fullWidth">
              Calcular
            </Button>
          </div>
        </form>
      </div>
    )
  }

  const renderTable = () => {
    return (
      <div className={setClass(['sectionContainer', 'table'], styles)}>
        <h2 className={styles.sectionTitle}>
          Veja as vantagens de ter um plano faleMais!
        </h2>

        <Table dataBody={tableContent} />

        <div className={styles.buttonsTableGroup}>
          <Button variant="outline" size="small" onClick={handleBackForm}>
            Voltar
          </Button>
          <Button variant="secondary" size="small">
            Contratar
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Hero />

      <div
        className={setClass(
          ['sectionContainer', 'sectionCalculatePlan'],
          styles,
        )}
      >
        {isShowTable ? renderTable() : renderForm()}
      </div>

      <div className={setClass(['sectionContainer'], styles)}>
        <section className={styles.container} id="plans">
          <h2 className={styles.sectionTitle}>Conheça os planos</h2>
          <PlanCard plans={plansMock} />
        </section>
      </div>
    </>
  )
}
