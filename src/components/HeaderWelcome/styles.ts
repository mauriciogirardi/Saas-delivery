import styled from 'styled-components'

interface WrapperProps {
  focused: boolean
  mainColor: string
}

export const Header = styled.header`
  background-color: ${p => p.theme.colors.backgroundSecondary};
  padding: 2rem 1.2rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${p => p.theme.colors.titlePrimary};
  line-height: 2.2rem;
`

export const SubTitle = styled.samp`
  font-size: 1rem;
  font-weight: 400;
  color: ${p => p.theme.colors.titleSecondary};
`

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.BackgroundInput};
  height: 2.5rem;
  width: 100%;
  margin-top: 1.8rem;
  border: 1px solid ${p => p.theme.colors.BackgroundInput};
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  border-color: ${({ focused, mainColor }) => (focused ? mainColor : '#fff')};
`

export const InputSearch = styled.input`
  flex: 1;
  font-size: 1.1rem;
  margin-left: 1rem;
  border-radius: 0;
  height: 2.5rem;
  background-color: transparent;
`
