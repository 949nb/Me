import styled from 'styled-components'
import { LeftPadding, ScreenMaxWidth, TopBarHeight } from '../../../assets/CommonScss'

export const NavWrapper = styled.div`
  height: ${TopBarHeight};
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 3;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);

  @media only screen and (max-width: ${ScreenMaxWidth}) {
    padding: 0 ${LeftPadding};
  }
`

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 30px;
  font-weight: bolder;
`
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  > div {
    padding-left: 20px;
  }
`

export const NavItem = styled.div`
  cursor: pointer;
  &:hover {
    color: cornflowerblue;
  }
`