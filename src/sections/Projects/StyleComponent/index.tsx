import styled from 'styled-components'
import { BackgroundColor, BoxShadow, LeftPadding, ScreenMaxWidth } from '../../../assets/CommonScss'

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-height: 60vh;
  background: ${ BackgroundColor };
  padding: 0 ${LeftPadding};
  > .title {
    font-size: 2em;
    font-weight: bolder;
    margin-bottom: 5rem;
  }
  & .project-content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin: 0 -1px;
    > .project-item {
      text-align: center;
      padding: 4rem 0;
      background: #FFFEFC; 
      > h2 {
        margin-top: 10px;
      }
      > p {
        margin: 0;
        padding: 0;
      }
      &:hover {
        box-shadow: ${BoxShadow};
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: ${ ScreenMaxWidth }) {
    & .title {
      margin: 5rem;
    }
    & .project-content {
      grid-template-columns: repeat(1,1fr); 
    }
  }
`

export const ProjectItemWrapper = styled.img`
  height: 20rem;
  width: 20rem;
  border: 2px solid black;
`