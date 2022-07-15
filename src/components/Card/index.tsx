import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../store/contexts/CartContex'
import { formatCurrency } from '../../utils/formatCurrency'

import * as S from './styles'

interface ICardProps {
  id: string
  title: string
  about: string
  price: number
  imgUrl: string
  tags: string[]
}

export const Card = ({
  id,
  title,
  about,
  price,
  imgUrl,
  tags
}: ICardProps) => {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)

  const { addToCart } = useCart()

  const handleAddCoffeeQuantity = () => {
    setCoffeeQuantity(prev => prev + 1)
  }

  const handleSubCoffeeQuantity = () => {
    if (coffeeQuantity === 0) return

    setCoffeeQuantity(prev => prev - 1)
  }

  const handleAddCoffeeToCart = () => {
    addToCart({
      id,
      title,
      imgUrl,
      price,
      quantity: coffeeQuantity,
    })
  }
  
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
          <S.Price>{formatCurrency(price)}</S.Price>
        </S.PriceWrapper>
        <S.Actions>
          <S.CounterWrapper>
            <button onClick={handleSubCoffeeQuantity}>
              <Minus size={14} />
            </button>
            <span>{coffeeQuantity}</span>
            <button onClick={handleAddCoffeeQuantity}>
              <Plus size={14} />
            </button>
          </S.CounterWrapper>
          <S.IconWrapper onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight='fill' />
          </S.IconWrapper>
        </S.Actions>
      </S.Footer>
    </S.CardContainer>
  )
}