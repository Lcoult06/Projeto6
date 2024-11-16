import { CardapioItem } from '../../pages/Home'
import { ButtonContainer } from '../Button/styles'
import {
  Card,
  TitleCard,
  Descricao,
  Modal,
  ModalContent,
  Description
} from './styles'
import fechar from '../../assets/images/fechar.png'

import { useState } from 'react'

type Props = {
  restaurante: CardapioItem
}

interface ModalState extends CardapioItem {
  isVisible: boolean
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({ restaurante }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    id: 1,
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      id: 1,
      nome: '',
      descricao: '',
      porcao: '',
      preco: 0
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 138) {
      return descricao.slice(0, 138) + '...'
    }
    return descricao
  }
  return (
    <>
      <Card>
        <img src={restaurante.foto} alt={restaurante.nome} />
        <TitleCard>{restaurante.nome}</TitleCard>
        <Descricao>{getDescricao(restaurante.descricao)}</Descricao>
        <ButtonContainer
          onClick={() =>
            setModal({
              isVisible: true,
              foto: restaurante.foto,
              id: restaurante.id,
              nome: restaurante.nome,
              descricao: restaurante.descricao,
              porcao: '',
              preco: 0
            })
          }
        >
          Mais detalhes
        </ButtonContainer>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <header>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <img src={restaurante.foto} alt={restaurante.nome} />
          <Description>
            <h4>{restaurante.nome}</h4>
            <p>
              {restaurante.descricao}
              <br /> <br /> <span>Serve: de {restaurante.porcao}</span>
            </p>
            <ButtonContainer>
              Adicionar ao carrinho - R${formataPreco(restaurante.preco)}
            </ButtonContainer>
          </Description>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Product
