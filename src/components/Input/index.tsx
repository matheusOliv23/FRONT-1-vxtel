import styles from './styles.module.scss'
import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string
}

export const Input = ({ name, labelName, ...rest }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{labelName}</label>
      <input name={name} {...rest} />
    </div>
  )
}
