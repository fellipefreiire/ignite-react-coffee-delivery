import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { useCart } from '../../../../store/contexts/CartContex'
import * as S from './styles'

interface IPaymentProps {
  paymentError: boolean
}

export const Payment = ({ paymentError }: IPaymentProps) => {
  const { cart, setPaymentMethod } = useCart()

  return (
    <S.Payment className={paymentError ? 'error' : ''}>
      <S.PaymentHeader>
        <CurrencyDollarSimple size={22} />
        <div>
          <S.RequestSubtitle>Pagamento</S.RequestSubtitle>
          <S.RequestText>O pagamento é feito na entrega. Escolha a forma que deseja pagar</S.RequestText>
        </div>
      </S.PaymentHeader>
      <S.PaymentWrapper>
        <S.PaymentCard
          className={cart.paymentMethod === 'Crédito' ? 'active' : ''}
          onClick={() => setPaymentMethod('Crédito')}
          type='button'
        >
          <CreditCard />
          <span>Cartão de crédito</span>
        </S.PaymentCard>
        <S.PaymentCard
          className={cart.paymentMethod === 'Débito' ? 'active' : ''}
          onClick={() => setPaymentMethod('Débito')}
          type='button'
        >
          <Bank />
          <span>Cartão de débito</span>
        </S.PaymentCard>
        <S.PaymentCard
          className={cart.paymentMethod === 'Dinheiro' ? 'active' : ''}
          onClick={() => setPaymentMethod('Dinheiro')}
          type='button'
        >
          <Money />
          <span>Dinheiro</span>
        </S.PaymentCard>
      </S.PaymentWrapper>
    </S.Payment>
  )
}