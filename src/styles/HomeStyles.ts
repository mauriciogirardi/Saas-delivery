import styled from 'styled-components'

interface GridProps {
  hasPromotion: boolean
}

export const Container = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  flex: 1;
`

export const ContentBanner = styled.div`
  padding: 0.5rem 0;
  display: flex;
  gap: 1rem;
`
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  width: 100%;



  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    height: ${p => p.hasPromotion ? '400px': '620px'};
    overflow-y: auto;
  }

  @media screen and (max-width: 360px) {
    height: ${p => p.hasPromotion ? '320px': '450px'};
  }
`
