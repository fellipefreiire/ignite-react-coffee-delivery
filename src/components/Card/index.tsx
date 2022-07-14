import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import * as S from './styles'

interface ICardProps {
  title: string
  about: string
  price: number
  imgUrl: string
  tags: string[]
}

export const Card = ({
  title,
  about,
  price,
  imgUrl,
  tags
}: ICardProps) => {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(price)
  
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <img src={imgUrl} alt="" />
      </S.ImageWrapper>
      <S.TagsWrapper>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </S.TagsWrapper>
      <S.TextWrapper>
        <h3>{title}</h3>
        <span>{about}</span>
      </S.TextWrapper>
      <S.Footer>
        <S.PriceWrapper>
          <S.Currency>R${" "}</S.Currency>
          <S.Price>{priceFormatted}</S.Price>
        </S.PriceWrapper>
        <S.Actions>
          <S.CounterWrapper>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </S.CounterWrapper>
          <S.IconWrapper>
            <ShoppingCart size={22} weight='fill' />
          </S.IconWrapper>
        </S.Actions>
      </S.Footer>
    </S.CardContainer>
  )
}