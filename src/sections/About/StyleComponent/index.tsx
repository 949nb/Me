import styled from 'styled-components'
import { BackgroundColor, BoxShadow, ScreenMaxWidth } from 'assets/CommonScss'

export const AboutWrapper = styled.div`
  height: 50vh;
  background: ${ BackgroundColor };
  box-shadow: ${ BoxShadow };
  display: flex;
  justify-content: center;
  align-items: center;
  > .about-me-item {
    box-shadow: 0 2px 8px rgb(84 70 35 / 15%), 0 1px 3px rgb(84 70 35 / 15%);
    background: #F9F5F1;
    display: flex;
    width: 70%;
    height: 70%;
    border-radius: 5px;
    > .left {
      flex: 1;
      padding: 2rem;
      margin: 4rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > .right {
      flex: 2;
      padding: 4rem;
      margin: 4rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: ${ ScreenMaxWidth }) {
    height: auto;
    > .about-me-item {
      margin: 3rem;
      padding: 4rem 2rem;
      flex-direction: column;
      border-bottom: 0;
      > .left {
        padding: 0;
        margin: 0;
        > h1 {
          font-size: 2rem;
        } 
      }
      > .right {
        padding: 0;
        margin: 0;
        > h2 {
          font-size: 1.4rem;
        }
      }
    }
  }
`