import styled from 'styled-components'

export const Payment = styled.div`
  padding: 40px;
  background-color: ${({ theme: { colors } }) => colors["base-card"]};
  border-radius: 6px;

  &.error {
    border: 1px solid red;
  }
`

export const PaymentHeader = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;

  div {
    display: flex;
    flex-direction: column;
  }

  svg {
    color: ${({ theme: { colors } }) => colors.purple};
  }
`

export const PaymentWrapper = styled.div`
  display: flex;
  gap: 12px;
`

export const PaymentCard = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme: { colors } }) => colors["base-button"]};
  cursor: pointer;
  width: 180px;

  span {
    font: ${({ theme: { fonts } }) => fonts.components["button-s"]};
    color: ${({ theme: { colors } }) => colors["base-text"]};
    text-transform: uppercase;
  }

  svg {
    color: ${({ theme: { colors } }) => colors.purple};
  }

  &.active {
    background-color: ${({ theme: { colors } }) => colors["purple-light"]};
    border: 1px solid ${({ theme: { colors } }) => colors.purple};
  }
`

export const RequestSubtitle = styled.span`
  font: ${({ theme: { fonts } }) => fonts.text["regular-m"]};
  color: ${({ theme: { colors } }) => colors["base-subtitle"]};
`

export const RequestText = styled.span`
  font: ${({ theme: { fonts } }) => fonts.text["regular-s"]};
  color: ${({ theme: { colors } }) => colors["base-text"]};
`