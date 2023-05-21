import Image from 'next/image'
import styles from '../styles/menu.module.css'

import logoCasaVerde from '../assets/img/logoCasaVerde.svg'
import Link from 'next/link'


export default function Menu() {
  return (
    <header className={styles.menu}>
      <div>
        <Image src={logoCasaVerde} alt='Logo Casa Verde' />
      </div>
          <nav>
            <li>
              <Link href={'/'}>
                Como fazer
              </Link>
              /
            </li>
            <li>
              <Link href={'/'}>
                Ofertas
              </Link>
              /
            </li>
            <li>
              <Link href={'/'}>
                Depoimentos
              </Link>
              /
            </li>
            <li>
              <Link href={'/'}>
               Vídeos
              </Link>
              /
            </li>
            <li>
              <Link href={'/'}>
               Meu Carrinho
              </Link>
              /
            </li>
          </nav>
       
    </header>
  )
}
