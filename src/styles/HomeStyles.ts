import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  flex: 1;
`

export const ContentBanner = styled.div`
  padding: 1rem 1.2rem;
  display: flex;
  gap: 1rem;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    height: 400px;
    overflow-y: auto;
  }
`
