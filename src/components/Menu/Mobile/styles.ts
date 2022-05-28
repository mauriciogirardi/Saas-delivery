import styled from 'styled-components'

export const Container = styled.footer`
  position: relative;
  width: 100%;
  height: 60px;
  background: ${p => p.theme.colors.orangeSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;

  @media screen and (min-width: 560px) {
    margin-top: 3rem;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  width: 360px;
`

export const Li = styled.li`
  position: relative;
  width: 87.5px; // 350 4 = 87.5
  height: 60px;
  z-index: 2;
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .active {
    background-color: ${p => p.theme.colors.orangePrimary};
    transform: translateY(-25px);
    svg {
      color: #fff;
    }
  }

  span.icon {
    position: relative;
    width: 55px;
    height: 55px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${p => p.theme.colors.orangePrimary};
  }
`
