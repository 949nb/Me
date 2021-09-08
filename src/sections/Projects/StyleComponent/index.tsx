import styled from 'styled-components'
import { BackgroundColor, BoxShadow, LeftPadding, ScreenMaxWidth } from '../../../assets/CommonScss'

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${ BackgroundColor };
  padding: 0 ${ LeftPadding };
  margin-top: 10rem;

  > .title {
    font-size: 2em;
    font-weight: bolder;
    margin-bottom: 5rem;
  }

  .ProjectItemWrapper {
    height: 20rem;
    width: 20rem;
    border: 2px solid black;
  }

  & .project-content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin: 0 -1px;
    //background: #FFFEFC;
    > .project-item {
      text-align: center;
      padding: 4rem 2rem;
      background: #FFFEFC;

      > h2 {
        margin-top: 10px;
      }

      p {
        margin: 0;
        padding: 0;
      }

      &:hover {
        box-shadow: ${ BoxShadow };
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: ${ ScreenMaxWidth }) {
    margin-top: 4rem;
    & .title {
      margin: 5rem;
    }

    & .project-content {
      grid-template-columns: repeat(1, 1fr);

      & section {
        text-align: left;
      }
    }
  }
`

export const ProjectItemWrapper = styled.img`
  height: 20rem;
  width: 20rem;
  border: 2px solid black;
  cursor: pointer;
`