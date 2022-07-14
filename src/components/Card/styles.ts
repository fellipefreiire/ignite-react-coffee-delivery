import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors['base-card']};
  border-radius: 6px 36px;
  width: 256px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;

  img {
    margin-top: -36px;
  }
`

export const TagsWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
  justify-content: center;
  
  span {
    border-radius: 100px;
    background-color: ${({ theme: { colors } }) => colors['yellow-light']};
    padding: 4px 8px;
    color: ${({ theme: { colors } }) => colors['yellow-dark']};
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
  text-align: center;

  h3 {
    font: ${({ theme: { fonts }}) => fonts.title['title-s']};
    color: ${({ theme: { colors } }) => colors['base-subtitle']};
  }

  span {
    font: ${({ theme: { fonts }}) => fonts.text['regular-s']};
    color: ${({ theme: { colors } }) => colors['base-label']};
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PriceWrapper = styled.div``

export const Currency = styled.span`
  font: ${({ theme: { fonts }}) => fonts.text['regular-s']};
  color: ${({ theme: { colors } }) => colors['base-text']};
`

export const Price = styled.span`
  font: ${({ theme: { fonts }}) => fonts.title['title-m']};
  color: ${({ theme: { colors } }) => colors['base-text']};
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`

export const CounterWrapper = styled.div`
  display: flex;
  gap: 4px;
  background-color: ${({ theme: { colors } }) => colors['base-button']};
  padding: 8px;
  border-radius: 6px;
  
  button {
    background-color: ${({ theme: { colors } }) => colors['base-button']};
    color: ${({ theme: { colors } }) => colors.purple};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    transition: color .3s ease;
    cursor: pointer;
    
    &:hover {
      color: ${({ theme: { colors } }) => colors['purple-dark']};
    }
  }

  span {
    font: ${({ theme: { fonts }}) => fonts.text['regular-m']};
    color: ${({ theme: { colors } }) => colors['base-title']};
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme: { colors } }) => colors['purple-dark']};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 8px;
  cursor: pointer;
  transition: background-color .3s ease;
  
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.purple};
  }
`
