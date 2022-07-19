import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'

import illustration from '../../assets/Illustration.png'
import { useCart } from '../../store/zustand/CartStore'
// import { useCart } from '../../store/contexts/CartContex'

import * as S from './styles'

type Address = {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

export const Success = () => {
  // const { cart, clearStateAndLocalStorage } = useCart()
  const [address, setAddress] = useState<Address>()
  const [paymentMethod, setPaymentMethod] = useState('')

  const cart = useCart(s => s.cart)
  const clearStateAndLocalStorage = useCart(s => s.clearStateAndLocalStorage)

  useEffect(() => {
    setAddress(cart.address)
    setPaymentMethod(cart.paymentMethod)
    clearStateAndLocalStorage()
  }, [])

  return (
    <S.SuccessContainer>
      <S.TextWrapper>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </S.TextWrapper>

      <S.InfoContainer>
        <S.ContentWrapper>
          <S.InfoWrapper>
            <S.IconWrapper iconBackgroundColor='purple'>
              <MapPin size={16} />
            </S.IconWrapper>
            <S.AddressWrapper>
              <span>
                Entrega em <span>{address?.rua}, {address?.numero}{`, ${address?.complemento}`}</span> {address?.bairro} - {address?.cidade}, {address?.uf.toLocaleUpperCase()}
              </span>
            </S.AddressWrapper>
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.IconWrapper iconBackgroundColor='yellow'>
              <Timer size={16} />
            </S.IconWrapper>
            <S.DeliveryAndPaymentWrapper>
              <span>Previsão de entrega</span>
              <span>20 min - 30 min</span>
            </S.DeliveryAndPaymentWrapper>
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.IconWrapper iconBackgroundColor='orange'>
              <CurrencyDollar size={16} />
            </S.IconWrapper>
            <S.DeliveryAndPaymentWrapper>
              <span>Pagamento na entrega</span>
              <span>{paymentMethod}</span>
            </S.DeliveryAndPaymentWrapper>
          </S.InfoWrapper>
        </S.ContentWrapper>

        <img src={illustration} alt="" />
      </S.InfoContainer>

    </S.SuccessContainer>
  )
}