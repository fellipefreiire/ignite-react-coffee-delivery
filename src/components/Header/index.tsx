import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="" />
      <S.Actions>
        <S.Location>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </S.Location>
        <S.Cart>
          <ShoppingCart size={22} weight="fill" />
        </S.Cart>
      </S.Actions>
    </S.HeaderContainer>
  )
}