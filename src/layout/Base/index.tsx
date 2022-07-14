import { ReactElement } from 'react'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import styles from './styles.module.scss'

interface BaseProps {
  children: ReactElement
}

export const Base = ({ children }: BaseProps) => {
  return (
    <>
      <Header />

      <main className={styles.content}>{children}</main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}
