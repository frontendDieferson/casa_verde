import ContainerHero from '@/components/ContainerHero'
import styles from './page.module.css'
import Menu from '@/components/Menu'
import AssinaturaNewsletter from '@/components/NewsLetter'
import Products from '@/components/Products'

export default function Home() {
  return (
    <main>
      <Menu />
      <AssinaturaNewsletter />
      <ContainerHero />
      <Products />
    </main>
  )
}
