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
  gap: 12px;
`

const BaseActionsContent = styled.div`
  padding: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`

export const Location = styled(BaseActionsContent)`
  background-color: ${({ theme: { colors } }) => colors['purple-light']};
  color: ${({ theme: { colors } }) => colors.purple};
  gap: 4px;
  
  span {
    font: ${({ theme: { fonts }}) => fonts.text['regular-s']};
    color: ${({ theme: { colors } }) => colors['purple-dark']};
  }
`

export const Cart = styled(BaseActionsContent)`
  background-color: ${({ theme: { colors } }) => colors['yellow-light']};
  color: ${({ theme: { colors } }) => colors.yellow};
`