import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Image from 'next/image'

import 'swiper/css'
import * as S from './styles'

export const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <S.Container>
          <Image
            src={'/assets/images/banner_promocao.png'}
            alt="é um banner de promoção com a imagem de um hamburger"
            width={400}
            height={190}
            objectFit="cover"
          />
        </S.Container>
      </SwiperSlide>
      <SwiperSlide>
        <S.Container>
          <Image
            src={'/assets/images/banner_promocao.png'}
            alt="é um banner de promoção com a imagem de um hamburger"
            width={400}
            height={190}
            objectFit="cover"
          />
        </S.Container>
      </SwiperSlide>
      <SwiperSlide>
        <S.Container>
          <Image
            src={'/assets/images/banner_promocao.png'}
            alt="é um banner de promoção com a imagem de um hamburger"
            width={400}
            height={190}
            objectFit="cover"
          />
        </S.Container>
      </SwiperSlide>
    </Swiper>
  )
}
