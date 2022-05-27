import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  flex: 1;
`

export const ContentBanner = styled.div`
  padding: 1.5rem 1.2rem;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 540px) {
    flex-wrap: wrap;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
