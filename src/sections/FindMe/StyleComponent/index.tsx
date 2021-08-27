import styled from 'styled-components'
import { ScreenMaxWidth } from 'assets/CommonScss'

export const FindWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  //flex-wrap: wrap;
  @media only screen and (max-width: ${ ScreenMaxWidth }) {
  }
`