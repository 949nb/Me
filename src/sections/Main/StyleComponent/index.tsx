import styled from 'styled-components'
import { BackgroundColor, BoxShadow, LeftPadding, ScreenMaxWidth } from 'assets/CommonScss'

export const MainWrapper = styled.div`
  height: 100vh;
  min-width: 37.5rem;
  background: ${ BackgroundColor };
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  font-weight: bold;
  position: relative;
  box-shadow: ${BoxShadow};

  > .introduce-myself {
    padding-left: 10rem;
  }

  > .down-svg {
    position: absolute;
    display: block;
    bottom: 5%;
    left: 50%;
    height: 5rem;
    width: 5rem;
    transform: translateX(-50%);
  }

  // 移动端
  @media only screen and (max-width: ${ ScreenMaxWidth }) {
    flex-direction: column;
    padding: 0 ${ LeftPadding };
    .introduce-myself {
      font-size: 3rem;
      padding-left: 0;
    }
  }
  @media only screen and (max-width: 130rem) {
    font-size: 5.5rem;
    padding-left: ${ LeftPadding };
    .introduce-myself {
      padding-left: 0;
    }
  }
  @media only screen and (max-width: 100rem) {
    font-size: 5rem;
    padding-left: ${ LeftPadding };
    .introduce-myself {
      padding-left: 0;
    }
  }
`