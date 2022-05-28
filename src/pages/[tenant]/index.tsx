import type { NextPage } from 'next'
import Head from 'next/head'

import { Banner } from '../../components/Banner'
import { CardProduct } from '../../components/CardProduct'
import { HeaderWelcome } from '../../components/HeaderWelcome'
import { MenuMobile } from '../../components/Menu/Mobile'

import * as S from '../../styles/HomeStyles'

interface HomeProps {
  hasPromotion?: boolean
}

const Home: NextPage = ({ hasPromotion = true }: HomeProps) => {
  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <Head>
        <title>Cardápio</title>
      </Head>

      <S.Wrapper>
        <S.Container>
          <HeaderWelcome mainColor="#FB9400" onSearch={handleSearch} />

          {hasPromotion && (
            <S.ContentBanner>
              <Banner />
            </S.ContentBanner>
          )}

          <S.Grid hasPromotion={hasPromotion}>
            <CardProduct />
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
    </>
  )
}

export default Home
