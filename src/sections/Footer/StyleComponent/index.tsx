import styled from 'styled-components'
import { BoxShadow } from '../../../assets/CommonScss'

export const FooterWrapper = styled.div`
  height: auto;
  padding: 2rem 0;
  background: #000000;
  box-shadow: ${BoxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #cccccc;
  font-weight: bolder;
  line-height: 4rem;

  img {
    margin: 0 .5rem;
    height: 3rem;
    width: 3rem;
  }
`