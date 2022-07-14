import { Button } from 'components/Button'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2>
          <a href="/">VxTel</a>
        </h2>
        <Button variant="secondary" size="medium">
          Contratar
        </Button>
      </div>
    </header>
  )
}
