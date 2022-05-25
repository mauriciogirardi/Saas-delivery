import Image from 'next/image'

import styles from './Banner.module.css'

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/assets/images/banner_promocao.png'}
        alt="é um banner de promoção com a imagem de um hamburger"
        width={400}
        height={190}
        objectFit="cover"
      />
    </div>
  )
}
