import styles from './page.module.css'
import Menu from '@/components/Menu'
import AssinaturaNewsletter from '@/components/NewsLetter'

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <AssinaturaNewsletter />
    </main>
  )
}
