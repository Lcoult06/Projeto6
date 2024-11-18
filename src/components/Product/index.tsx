import { useEffect, useState } from 'react'
import ProdutoImg from '../../assets/images/pizza.png'
import banner from '../../assets/images/banner.png'
import { ButtonContainer } from '../Button/styles'
import {
  Card,
  TitleCard,
  Descricao,
  ProductList,
  ModalContent,
  Description,
  ModalContainer
} from './styles'
import fechar from '../../assets/images/fechar.png'
import { CardapioItem, Restaurante } from '../../pages/Home'

const mock: CardapioItem[] = [
  {
    foto: ProdutoImg,
    id: 1,
    nome: 'Ravioli al Tartufo Nero',
    descricao:
      'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
    porcao: '1 a 2 pessoas',
    preco: 0
  }
]

export type Props = {
  restaurante: CardapioItem[]
}

interface ModalState extends CardapioItem {
  isVisible: boolean
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

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      {restaurante.map((restaurante, index) => (
        <>
          <ProductList className="container">
            <Card key={restaurante.id}>
              <img
                src={restaurante.foto}
                alt={`Mídia ${index + 1} de ${restaurante.nome}`}
              />
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
                    preco: restaurante.preco
                  })
                }
              >
                Adicionar ao carrinho
              </ButtonContainer>
            </Card>
          </ProductList>
          <ModalContainer className={modal.isVisible ? 'visivel' : ''}>
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
          </ModalContainer>
        </>
      ))}
    </>
  )
}

export default Product
