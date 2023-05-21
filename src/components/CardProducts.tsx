import  Image, { StaticImageData } from 'next/image'
import styles from '../styles/cardproducts.module.css'
import { FiArrowRight } from 'react-icons/fi'
import { MouseEventHandler } from 'react';

type CardProductsProps = {
    image: {
        icon: StaticImageData,
        alt: string

    };
    title: string,
    subtitle: string,
    span: string,
    // onclick:MouseEventHandler<HTMLDivElement>;
}

export default function CardProducts({
    image,
    title,
    subtitle,
    span,
    // onclick
}: CardProductsProps) {
    return (
        <div className={styles.Container}>
            <Image src={image.icon} alt={image.alt} />
            <div className={styles.Content}>

            <h2>{title}</h2>
            <p>{subtitle}</p>
            <span>{span}<FiArrowRight size={24} color='#FFCB47' /></span>
            
            </div>
        </div>
    )
}