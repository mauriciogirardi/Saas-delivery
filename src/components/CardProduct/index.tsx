import * as S from './styles'

export const CardProduct = () => {
  return (
    <S.Container>
      <img
        src={'/assets/images/golden_burger.png'}
        alt="Imagem de um hamburger tradicional golder buger com o valor de R$25,50"
      />

      <div>
        <S.Category>Tradicional</S.Category>
        <S.Title>Golden Burger</S.Title>
        <S.Price>R$ 25,50</S.Price>
      </div>

      <S.Background />
    </S.Container>
  )
}
