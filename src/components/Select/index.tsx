import { SelectHTMLAttributes } from 'react'
import styles from './styles.module.scss'

export interface ISelectOptions {
  value: string
  label: string
}

interface IOptions extends SelectHTMLAttributes<HTMLSelectElement> {
  options: ISelectOptions[]
  labelName: string
}

export const Select = ({ options, name, labelName, ...rest }: IOptions) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{labelName}</label>
      <select name={name} defaultValue="" {...rest}>
        <option value="" disabled hidden>
          Selecione seu plano
        </option>
        {options.map((options) => (
          <option key={options.value} value={options.value}>
            {options.label}
          </option>
        ))}
      </select>
      <span className={styles.arrow}></span>
    </div>
  )
}
