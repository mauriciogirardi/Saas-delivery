import Link from 'next/link'
import { Bag, ForkKnife, Heart, Scroll } from 'phosphor-react'

import * as S from './styles'

export const MenuMobile = () => {
  return (
    <S.Container>
      <S.Ul>
        <S.Li>
          <Link href="/menu">
            <S.Wrapper>
              <span className="icon active">
                <ForkKnife size={28} />
              </span>
            </S.Wrapper>
          </Link>
        </S.Li>

        <S.Li>
          <Link href="/bag">
            <S.Wrapper>
              <span className="icon">
                <Bag size={28} />
              </span>
            </S.Wrapper>
          </Link>
        </S.Li>

        <S.Li>
          <Link href="/favorite">
            <S.Wrapper>
              <span className="icon">
                <Heart size={28} />
              </span>
            </S.Wrapper>
          </Link>
        </S.Li>

        <S.Li>
          <Link href="/order">
            <S.Wrapper>
              <span className="icon">
                <Scroll size={28} />
              </span>
            </S.Wrapper>
          </Link>
        </S.Li>
      </S.Ul>
    </S.Container>
  )
}
