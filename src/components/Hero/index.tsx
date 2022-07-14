import { Button } from 'components/Button'
import styles from './styles.module.scss'

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <h1 className={styles.title}>Fale mais com quem você ama!</h1>
        <p className={styles.paragraph}>
          Com os planos <strong>FaleMais</strong> você fala e a gente paga.
          Tenha minutos todos os dias para falar com quem quiser por nossa
          conta, você só paga os minutos excedentes do seu plano.
        </p>
        <a href="#plans">
          <Button variant="primary" size="fullWidth">
            Saiba mais
          </Button>
        </a>
      </div>
    </div>
  )
}
