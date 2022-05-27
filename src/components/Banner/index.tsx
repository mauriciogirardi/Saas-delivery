import Image from 'next/image'

import * as S from './styles'

export const Banner = () => {
  return (
    <S.Container>
      <Image
        src={'/assets/images/banner_promocao.png'}
        alt="é um banner de promoção com a imagem de um hamburger"
        width={400}
        height={190}
        objectFit="cover"
      />
    </S.Container>
  )
}
