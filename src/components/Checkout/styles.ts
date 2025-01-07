import styled from 'styled-components'

import { cores } from '../../styles'
import { ButtonContainer } from '../../components/Button/styles'

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

  small {
    color: ${cores.bege};
    font-size: 12px;
    font-weight: bold;
    // margin-top: 5px;
    // margin-bottom: 5px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    margin-top: 8px;
    width: 100%;
  }
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${cores.bege};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  flex: auto; // O grupo de input ocupa o espaço disponível

  label {
    color: ${cores.bege}; // Cor do texto do label
    font-size: 14px; // Tamanho da fonte do label
    font-style: normal; // Estilo da fonte do label
    font-weight: 700; // Peso da fonte do label
    display: block; // Exibe o label como bloco
    margin: 8px 0;
  }

  input {
    margin: 8px 0;
    padding: 0 8px; // Espaçamento interno horizontal
    background-color: ${cores.bege}; // Cor de fundo do input
    height: 32px; // Altura do input
    border: 1px solid ${cores.bege}; // Borda do input
    width: 100%; // Largura total do input
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  align-items: flex-end;
  margin-bottom: 8px;
`

export const ContainerConfirmation = styled.div`
  p {
    color: ${cores.bege}; // Cor do texto
    font-size: 14px; // Tamanho da fonte
    font-weight: 400; // Peso da fonte
    line-height: 22px; // Altura da linha
  }

  ${ButtonContainer} {
    margin-top: 24px; // Espaçamento inferior
  }
`
