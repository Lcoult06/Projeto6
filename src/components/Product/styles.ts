import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 8px;
  width: 100%;
  height: 338px;
  border-radius: 8px;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`
export const TitleCard = styled.h3`
  font-size: 16px;
  font-weight: 900;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  // padding-bottom: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  max-width: 1024px;
  width: 100%;
  height: 344px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  header {
    img {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
  > img {
    width: 280px;
    height: 280px;
    margin-right: 32px;
    object-fit: cover;
  }
`
export const Description = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.branca};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: ${cores.branca};
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 27px;
  }
  ${ButtonContainer} {
    padding: 4px 7px;
  }
`
