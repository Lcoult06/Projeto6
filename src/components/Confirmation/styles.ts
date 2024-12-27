import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  //   p {
  //   font-size; 14px
  //   font-weight: 400;
  //   line-height: 22px;
  //   display: flex;
  //   justify-content: center;
  //   text-align: center;
  //   color: ${cores.bege};
  // }

  //   ${ButtonContainer} {
  //   margin-top: 8px;
  //   width: 100%;
  //   margin-top: 24px;
  // }
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${cores.bege};
  margin-bottom: 16px;
`

export const ContainerConfirmation = styled.div`
  widht: 344px;
  height: 286px;
  margin-bottom: 24px;


    p {
    font-size; 14px
    font-weight: 400;
    line-height: 22px;
    color: ${cores.bege};
  }

    ${ButtonContainer} {
    margin-top: 8px;
    width: 100%;
    margin-top: 24px;
  }
`
