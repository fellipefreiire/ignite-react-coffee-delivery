import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import * as S from './styles'

export const Header = () => {
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
        <NavLink to='/checkout' title='Checkout'>
          <S.Cart>
            <ShoppingCart size={22} weight="fill" />
          </S.Cart>
        </NavLink>
      </S.Actions>
    </S.HeaderContainer>
  )
}