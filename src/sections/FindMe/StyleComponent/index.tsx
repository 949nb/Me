import styled from 'styled-components'
import { ScreenMaxWidth } from 'assets/CommonScss'

export const FindWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  min-width: 80vw;
  margin: 0 auto;
  //flex-wrap: wrap;
  h1 {
    font-size: 4rem;
  }
  .find-me-card {
    svg {
      margin: 0 2rem;
      height: 10rem;
      width: 10rem;
    }
  }
  
  @media only screen and (max-width: ${ ScreenMaxWidth }) {
    img {
      height: 20rem;
    }
    .find-me-card {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      svg {
        margin: 0 2rem;
        height: 10rem;
        width: 10rem;
      }
    }
  }
`