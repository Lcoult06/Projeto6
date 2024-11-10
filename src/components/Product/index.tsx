import { useEffect, useState } from 'react'
import ProdutoImg from '../../assets/images/pizza.png'
import banner from '../../assets/images/banner.png'
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
import { CardapioItem, Restaurante } from '../../pages/Home'
import { useParams } from 'react-router-dom'

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
  items: CardapioItem[]
}
// interface CardapioItem {
//   foto: string
//   id: number
//   nome: string
//   descricao: string
//   porcao: string
// }

interface ModalState extends CardapioItem {
  isVisible: boolean
}

const Product = ({ items }: Props) => {
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

  // const { id } = useParams()

  // const [cardapios, setCardapio] = useState<Restaurante>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setCardapio(res))
  // }, [id])

  // if (!cardapios) {
  //   return <h3>Carregando...</h3>
  // }

  return (
    <>
      <Card>
        {items.map((item, index) => (
          <div key={item.id}>
            <img src={item.foto} alt={`Imagem de ${index + 1} `} />
            <TitleCard>{item.nome}</TitleCard>
            <Descricao>{getDescricao(item.descricao)}</Descricao>
            <ButtonContainer
              onClick={() =>
                setModal({
                  isVisible: true,
                  foto: item.foto,
                  id: item.id,
                  nome: item.nome,
                  descricao: item.descricao,
                  porcao: '',
                  preco: 0
                })
              }
            >
              Adicionar ao carrinho
            </ButtonContainer>
          </div>
        ))}
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
          <img src={banner} alt="" />
          <Description>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br /> <br /> Serve: de 2 a 3 pessoas
            </p>
            <ButtonContainer>Adicionar ao carrinho - R$60,90</ButtonContainer>
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
