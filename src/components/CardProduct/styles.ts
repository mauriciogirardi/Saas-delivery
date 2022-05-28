import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 178px;
  height: 178px;
  border-radius: 8px;
  box-shadow: 4px 7px 26px -6px rgba(0, 0, 0, 0.2);
  padding: 0.6rem;
  position: relative;
  z-index: 10;

  img {
    z-index: 10;
  }
`

export const Category = styled.span`
  font-size: 0.6rem;
  font-weight: 500;
  margin-top: 0.5rem;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--title-primary);
`

export const Price = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: var(--orange-primary);
`
export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: var(--orange-secondary);
  border-radius: 8px 8px 0 0;
  z-index: 1;
`
