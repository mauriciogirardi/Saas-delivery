import type { NextPage } from 'next'

import { Banner } from '../../components/Banner'
import { CardProduct } from '../../components/CardProduct'
import { HeaderWelcome } from '../../components/HeaderWelcome'
import { MenuMobile } from '../../components/Menu/Mobile'

import * as S from '../../styles/HomeStyles'

const Home: NextPage = () => {
  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <S.Wrapper>
      <S.Container>
        <HeaderWelcome mainColor="#FB9400" onSearch={handleSearch} />

        <S.ContentBanner>
          <Banner />
        </S.ContentBanner>

        <S.Grid>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </S.Grid>
      </S.Container>

      <MenuMobile />
    </S.Wrapper>
  )
}

export default Home
