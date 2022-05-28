import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

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
        disableOnInteraction: false
      }}
    >
      <SwiperSlide>
        <S.Container>
          <img
            src={'/assets/images/banner_promocao.png'}
            alt="é um banner de promoção com a imagem de um hamburger"
          />
        </S.Container>
      </SwiperSlide>

      <SwiperSlide>
        <S.Container>
          <img
            src={'/assets/images/banner_promocao.png'}
            alt="é um banner de promoção com a imagem de um hamburger"
          />
        </S.Container>
      </SwiperSlide>

      <SwiperSlide>
        <S.Container>
          <img
            src={'/assets/images/banner_promocao.png'}
            alt="é um banner de promoção com a imagem de um hamburger"
          />
        </S.Container>
      </SwiperSlide>
    </Swiper>
  )
}
