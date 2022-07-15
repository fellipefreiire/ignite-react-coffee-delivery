import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { useCart } from '../../store/contexts/CartContex'

import * as S from './styles'

export const Header = () => {
  const { cart } = useCart()
  const coffeesQuantity = cart.coffees.length

  const dataObj = {
    'data-quantity': String(coffeesQuantity),
    quantity: coffeesQuantity
  }

  return (
    <S.HeaderContainer>
      <NavLink to='/' title='Início'>
        <img src={logo} alt="" />
      </NavLink>
      <S.Actions>
        <S.Location>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </S.Location>
        <S.CartWrapper {...dataObj}>
          <NavLink to='/checkout' title='Checkout'>
            <S.Cart>
              <ShoppingCart size={22} weight="fill" />
            </S.Cart>
          </NavLink>
        </S.CartWrapper>
      </S.Actions>
    </S.HeaderContainer>
  )
}