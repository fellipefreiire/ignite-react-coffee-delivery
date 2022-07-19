import styled from 'styled-components'

export const Address = styled.div`
  padding: 40px;
  background-color: ${({ theme: { colors } }) => colors["base-card"]};
  border-radius: 6px;
`

export const AddressHeader = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;

  div {
    display: flex;
    flex-direction: column;
  }

  svg {
    color: ${({ theme: { colors } }) => colors["yellow-dark"]};
  }
`

export const AddressInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    gap: 16px;
  }

  input {
    padding: 12px;
    background-color: ${({ theme: { colors } }) => colors["base-input"]};
    color: ${({ theme: { colors } }) => colors["base-text"]};
    border: 0;
    border-radius: 4px;
  }
  
  input::placeholder {
    color: ${({ theme: { colors } }) => colors["base-label"]};
  }

  & .full {
    width: 100%;
  }

  & .cnb {
    width: 200px;
  }

  & .uf {
    width: 60px;
    text-transform: uppercase;
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