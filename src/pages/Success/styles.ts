import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
  gap: 40px;
  padding: 0 160px;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 102px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme: { colors } }) => colors['yellow-dark']};
    font: ${({ theme: { fonts } }) => fonts.title['title-l']};
  }

  span {
    color: ${({ theme: { colors } }) => colors['base-subtitle']};
    font: ${({ theme: { fonts } }) => fonts.text['regular-l']};
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 40px 132px 40px 40px;

  background: 
    linear-gradient(${({ theme: { colors } }) => colors.background}, ${({ theme: { colors } }) => colors.background}) padding-box,
    linear-gradient(115deg, ${({ theme: { colors } }) => colors.yellow}, ${({ theme: { colors } }) => colors.purple}) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const ICON_BACKGROUND_COLORS = {
  yellow: 'yellow',
  orange: 'yellow-dark',
  purple: 'purple'
} as const

interface IIconBackgroundProps {
  iconBackgroundColor: keyof typeof ICON_BACKGROUND_COLORS
}

export const IconWrapper = styled.div<IIconBackgroundProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 32px;
  height: 32px;

  background-color: ${({ theme: { colors }, iconBackgroundColor }) => colors[ICON_BACKGROUND_COLORS[iconBackgroundColor]]};
  color: ${({ theme: { colors } }) => colors.white};
`

export const AddressWrapper = styled.div`
  max-width: 310px;

  > span {
    color: ${({ theme: { colors } }) => colors['base-text']};
    font: ${({ theme: { fonts } }) => fonts.text['regular-m']};

    span {
      color: ${({ theme: { colors } }) => colors['base-text']};
      font: ${({ theme: { fonts } }) => fonts.text['bold-m']};
    }
  }
`

export const DeliveryAndPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span:first-of-type {
    color: ${({ theme: { colors } }) => colors['base-text']};
    font: ${({ theme: { fonts } }) => fonts.text['regular-m']};
  }

  span:nth-of-type(2) {
    color: ${({ theme: { colors } }) => colors['base-text']};
    font: ${({ theme: { fonts } }) => fonts.text['bold-m']};
  }
`