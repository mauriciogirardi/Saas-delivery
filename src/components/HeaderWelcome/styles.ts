import styled from 'styled-components'

interface WrapperProps {
  focused: boolean
  mainColor: string
}

export const Header = styled.header`
  background-color: var(--background-secondary);
  padding: 2rem 1.2rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--title-primary);
  line-height: 2.2rem;
`

export const SubTitle = styled.samp`
  font-size: 1rem;
  font-weight: 400;
  color: var(--title-secondary);
`

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  background-color: var(--background-input);
  height: 2.5rem;
  width: 100%;
  margin-top: 1.8rem;
  border: 1px solid var(--background-input);
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  border-color: ${({ focused, mainColor }) => (focused ? mainColor : '#fff')};
`

export const InputSearch = styled.input`
  flex: 1;
  font-size: 1rem;
  margin-left: 1rem;
`
