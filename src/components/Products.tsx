
import styles from '../styles/products.module.css'
import CardProducts from './CardProducts'
//Imports das imagens para listagem de produtos
import iconAjugaReptans from '../assets/images/ajugaReptans.png'
import iconCordylineCofruticosa from '../assets/images/Cordyline.png'
import iconCrassulaOvata from '../assets/images/CrassulaOvata.png'
import iconCyperusRotundus from '../assets/images/CyperusRotundus.png'
import iconDelaireOdorata from '../assets/images/DelaireaOdorata.png'
import iconDaturaMetel from '../assets/images/DaturaMetel.png'



export default function Products() {


    const AllCardsProducts = [
        {
            image: {
                icon: iconAjugaReptans,
                alt: 'Ajuga Reptans'
            },
            title: 'Ajuga Reptans',
            subtitle: 'R$20.00',
            span: 'comprar'
        },
        {
            image: {
                icon: iconCordylineCofruticosa,
                alt: 'Cordyline Cofruticosa'
            },
            title: 'Cordyline Cofruticosa',
            subtitle: 'R$20.00',
            span: 'comprar'
        },
        {
            image: {
                icon: iconCrassulaOvata,
                alt: 'Crassula ovata'
            },
            title: 'Crassula ovata',
            subtitle: 'R$20.00',
            span: 'comprar'
        },
        {
            image: {
                icon: iconCyperusRotundus,
                alt: 'Cyperus rotundus'
            },
            title: 'Cyperus rotundus',
            subtitle: 'R$20.00',
            span: 'comprar'
        },
        {
            image: {
                icon: iconDelaireOdorata,
                alt: 'Delairea odorata'
            },
            title: 'Delairea odorata',
            subtitle: 'R$20.00',
            span: 'comprar'
        },
        {
            image: {
                icon: iconDaturaMetel,
                alt: 'Datura metel'
            },
            title: 'Datura metel',
            subtitle: 'R$20.00',
            span: 'comprar'
        },


    ]

    return (
        <div className={styles.containerProducts}>
            <h1>Conheça nossas</h1>
            <br />
            <strong>ofertas</strong>
            <div className={styles.ContentProducts}>
               {AllCardsProducts.map((cardproduct, index) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <CardProducts 
                        image={cardproduct.image}
                        title={cardproduct.title}
                        subtitle={cardproduct.subtitle}
                        span={cardproduct.span}
                    />
                )
               })}
            </div>
        </div>
    )
}