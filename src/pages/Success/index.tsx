import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import illustration from '../../assets/Illustration.png'

import * as S from './styles'

export const Success = () => {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS
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
              <span>Cartão de Crédito</span>
            </S.DeliveryAndPaymentWrapper>
          </S.InfoWrapper>
        </S.ContentWrapper>

        <img src={illustration} alt="" />
      </S.InfoContainer>

    </S.SuccessContainer>
  )
}