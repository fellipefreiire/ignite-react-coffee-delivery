import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'

import coffeeDeliveryBackground from '../../assets/coffee-delivery-background.png'
import { Card } from '../../components/Card'
import { api } from '../../services/api'

import * as S from './styles'

interface ICoffees {
  id: string
  title: string
  about: string
  price: number
  imgUrl: string
  tags: string[]
}

export const Home = () => {
  const [coffees, setCoffees] = useState<ICoffees[]>()

  useEffect(() => {
    async function fetchCoffees() {
      try {
        const response = await api.get('/coffees')
        setCoffees(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchCoffees()
  }, [])

  return (
    <S.HomeContainer>
      <S.IntroSection>
        <S.IntroSectionContent>
          <S.ContentWrapper>
            <S.TextWrapper>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
            </S.TextWrapper>

            <S.ListWrapper>
              <S.ListSeparator>
                <S.ItemWrapper>
                  <S.IconWrapper iconBackgroundColor='orange'>
                    <ShoppingCart size={16} weight='fill' />
                  </S.IconWrapper>
                  <span>Compra simples e segura</span>
                </S.ItemWrapper>

                <S.ItemWrapper>
                  <S.IconWrapper iconBackgroundColor='yellow'>
                    <Timer size={16} weight='fill' />
                  </S.IconWrapper>
                  <span>Entrega rápida e rastreada</span>
                </S.ItemWrapper>
              </S.ListSeparator>

              <S.ListSeparator>
                <S.ItemWrapper>
                  <S.IconWrapper iconBackgroundColor='gray'>
                    <Package size={16} weight='fill' />
                  </S.IconWrapper>
                  <span>Embalagem mantém o café intacto</span>
                </S.ItemWrapper>

                <S.ItemWrapper>
                  <S.IconWrapper iconBackgroundColor='purple'>
                    <Coffee size={16} weight='fill' />
                  </S.IconWrapper>
                  <span>O café chega fresquinho até você</span>
                </S.ItemWrapper>
              </S.ListSeparator>
            </S.ListWrapper>
          </S.ContentWrapper>

          <img src={coffeeDeliveryBackground} alt="" />
        </S.IntroSectionContent>
      </S.IntroSection>

      <S.CoffeesSection>
        <S.CoffeSectionContent>
          <h2>Nossos Cafés</h2>
          <S.CardsWrapper>
            {coffees?.map((coffee) => (
              <Card
                key={coffee.id}
                title={coffee.title}
                about={coffee.about}
                imgUrl={coffee.imgUrl}
                price={coffee.price}
                tags={coffee.tags}
              />
            ))}
          </S.CardsWrapper>
        </S.CoffeSectionContent>
      </S.CoffeesSection>
    </S.HomeContainer>
  )
}