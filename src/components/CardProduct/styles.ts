import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 178px;
  border-radius: 8px;
  box-shadow: 4px 7px 26px -6px rgba(0, 0, 0, 0.31);
  padding: 0.6rem;
  position: relative;
  z-index: 0;

  img {
    z-index: 10;
    width: 90px;
    height: 90px;
    object-fit:cover ;
  }
`

export const Category = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: 0.5rem;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${p => p.theme.colors.titlePrimary};
`

export const Price = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color:${p => p.theme.colors.orangePrimary};
`
export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: ${p => p.theme.colors.orangeSecondary};
  border-radius: 8px 8px 0 0;
  z-index: 1;
`
