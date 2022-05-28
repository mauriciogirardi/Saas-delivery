import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 190px;
    object-fit: cover;
  }

  @media screen and (min-width: 560px) {
    img {
      width: 400px;
    }
  }

  @media screen and (max-width: 360px) {
    img {
      width: 300px;
      height: 120px;
    }
  }
`
