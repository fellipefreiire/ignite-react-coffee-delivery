import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.background};
  padding: 2rem 10rem;
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;

  /* position: fixed; */
  /* width: 100%; */
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

const BaseActionsContent = styled.div`
  padding: 8px;
  height: 38px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`

export const Location = styled(BaseActionsContent)`
  background-color: ${({ theme: { colors } }) => colors['purple-light']};
  color: ${({ theme: { colors } }) => colors.purple};
  gap: 4px;
  
  span {
    font: ${({ theme: { fonts } }) => fonts.text['regular-s']};
    color: ${({ theme: { colors } }) => colors['purple-dark']};
  }
`

export const Cart = styled(BaseActionsContent)`
  background-color: ${({ theme: { colors } }) => colors['yellow-light']};
`

interface ICartWrapper {
  'data-quantity': string
  quantity: number
}

export const CartWrapper = styled.div<ICartWrapper>`
  display: flex;
  position: relative;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.yellow};
  }

  &::after {
    position: absolute;
    display: ${({ quantity }) => quantity > 0 ? 'flex' : 'none' };
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: -0.625rem;
    right: -0.625rem;

    font: ${({ theme: { fonts } }) => fonts.text['bold-s']};
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors['yellow-dark']};
    content: attr(data-quantity);
  }
`