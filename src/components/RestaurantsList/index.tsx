import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantsList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((local) => (
            <li key={local.id}>
              <Restaurant
                id={local.id}
                titulo={local.titulo}
                destacado={false}
                tipo={local.tipo as string}
                avaliacao={local.avaliacao as number}
                descricao={local.descricao}
                capa={local.capa}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
