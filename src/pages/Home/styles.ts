import styled from 'styled-components'

import backgroundHero from '../../assets/background-hero.png'

export const HomeContainer = styled.main``

export const IntroSection = styled.section`
  background-image: url(${backgroundHero});
`

const BaseSectionContent = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1440px;

  margin: auto;
`

export const IntroSectionContent = styled(BaseSectionContent)`
  padding: 6rem 10rem;
`

export const CoffeSectionContent = styled(BaseSectionContent)`
  flex-direction: column;
  padding: 2rem 10rem 0;
`

export const ContentWrapper = styled.div`
  max-width: 37rem;
`

export const TextWrapper = styled.div`
  margin-bottom: 4rem;

  h1 {
    font: ${({ theme: { fonts } }) => fonts.title['title-xl']};
    color: ${({ theme: { colors } }) => colors['base-title']};
  }
  
  span {
    font: ${({ theme: { fonts } }) => fonts.text['regular-l']};
    color: ${({ theme: { colors } }) => colors['base-subtitle']};
  }
`

export const ListWrapper = styled.div`
  display: flex;
  gap: 40px;
`

export const ListSeparator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  span {
    font: ${({ theme: { fonts } }) => fonts.text['regular-m']};
    color: ${({ theme: { colors } }) => colors['base-text']};
  }
`

const ICON_BACKGROUND_COLORS = {
  yellow: 'yellow',
  orange: 'yellow-dark',
  gray: 'base-text',
  purple: 'purple'
} as const

interface IIconBackgroundProps {
  iconBackgroundColor: keyof typeof ICON_BACKGROUND_COLORS
}

export const IconWrapper = styled.div<IIconBackgroundProps>`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors }, iconBackgroundColor }) =>
    colors[ICON_BACKGROUND_COLORS[iconBackgroundColor]]};
  border-radius: 50%;

  color: ${({ theme: { colors } }) => colors.white};
`
export const CoffeesSection = styled.section`
  margin-bottom: 160px;

  h2 {
    font: ${({ theme: { fonts } }) => fonts.title['title-l']};
    color: ${({ theme: { colors } }) => colors['base-subtitle']};

    margin-bottom: 4rem;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
`