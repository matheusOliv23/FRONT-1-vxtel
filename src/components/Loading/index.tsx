import { FaSpinner } from 'react-icons/fa'

import styles from './styles.module.scss'

export const Loading = () => {
  return (
    <div className={styles.container}>
      <FaSpinner />
    </div>
  )
}
