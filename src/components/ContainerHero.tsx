import Image from "next/image";
import styles from "../styles/containerhero.module.css";

import ImagePlanta from "../assets/images/ContainerHeroImage.png";

export default function ContainerHero() {
  return (
    <main>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <Image className={styles.Image} src={ImagePlanta} alt="planta" />
          <div className={styles.Info}>
            <h1>Como conseguir</h1>
            <strong>minha planta</strong>
            <ul>
                <li><p>Escolha suas plantas</p></li>
                <li><p>Faça seu pedido</p></li>
                <li><p>Aguarde na sua casa</p></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
