import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Minus, Money, Plus, Trash } from 'phosphor-react'
import { useCart } from '../../store/contexts/CartContex'
import { formatCurrency } from '../../utils/formatCurrency'
import * as S from './styles'

export const Checkout = () => {
  const { cart, removeFromCart, addCoffeeFromCheckout, subtractCofeeFromCheckout } = useCart()

  const handleRemoveCoffeeFromCart = (coffeeId: string) => {
    removeFromCart(coffeeId)
  }

  const handleAddCoffeeQuantity = (coffeeId: string) => {
    addCoffeeFromCheckout(coffeeId)
  }

  const handleSubtractCoffeeQuantity = (coffeeId: string) => {
    subtractCofeeFromCheckout(coffeeId)
  }

  return (
    <S.CheckoutContainer>
      <form>

        <S.Request>
          <h1>Complete seu pedido</h1>
          <S.Address>
            <S.AddressHeader>
              <MapPinLine size={22} />
              <div>
                <S.RequestSubtitle>Endereço de Entrega</S.RequestSubtitle>
                <S.RequestText>Informe o endereço onde deseja receber seu pedido</S.RequestText>
              </div>
            </S.AddressHeader>
            <S.AddressInputs>
              <div>
                <input className='cnb' type="text" name='cep' placeholder='CEP' />
              </div>
              <div>
                <input className='full' type="text" name='rua' placeholder='Rua' />
              </div>
              <div>
                <input className='cnb' type="text" name='numero' placeholder='Número' />
                <input className='full' type="text" name='complemento' placeholder='Complemento' />
              </div>
              <div>
                <input className='cnb' type="text" name='bairro' placeholder='Bairro' />
                <input className='full' type="text" name='cidade' placeholder='Cidade' />
                <input className='uf' type="text" name='uf' placeholder='UF' />
              </div>
            </S.AddressInputs>
          </S.Address>

          <S.Payment>
            <S.PaymentHeader>
              <CurrencyDollarSimple size={22} />
              <div>
                <S.RequestSubtitle>Pagamento</S.RequestSubtitle>
                <S.RequestText>O pagamento é feito na entrega. Escolha a forma que deseja pagar</S.RequestText>
              </div>
            </S.PaymentHeader>
            <S.PaymentWrapper>
              <S.PaymentCard>
                <CreditCard />
                <span>Cartão de crédito</span>
              </S.PaymentCard>
              <S.PaymentCard>
                <Bank />
                <span>Cartão de débito</span>
              </S.PaymentCard>
              <S.PaymentCard>
                <Money />
                <span>Dinheiro</span>
              </S.PaymentCard>
            </S.PaymentWrapper>
          </S.Payment>
        </S.Request>

        <S.SelectedCoffees>
          <h1>Cafés selecionados</h1>
          <S.ConfirmRequest>
            {cart.coffees.map((coffee) => (
              <S.SelectedCoffeeCard key={coffee.id}>
                <img src={coffee.imgUrl} alt="" />
                <S.CounterWrapper>
                  <S.CoffeeTitle>{coffee.title}</S.CoffeeTitle>
                  <S.Counter>
                    <div>
                      <button type='button' onClick={() => handleSubtractCoffeeQuantity(coffee.id)}>
                        <Minus size={14} />
                      </button>
                      <span>{coffee.quantity}</span>
                      <button type='button' onClick={() => handleAddCoffeeQuantity(coffee.id)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button type='button' onClick={() => handleRemoveCoffeeFromCart(coffee.id)}>
                      <Trash size={16} />
                      <span>Remover</span>
                    </button>
                  </S.Counter>
                </S.CounterWrapper>
                <S.PriceWrapper>
                  <S.Price>R$ {formatCurrency(coffee.price)}</S.Price>
                </S.PriceWrapper>
              </S.SelectedCoffeeCard>
            )
            )}

            <S.BillWrapper>
              <S.CostWrapper>
                <span>Total de itens</span>
                <span>R$ {formatCurrency(cart.totalCoffees)}</span>
              </S.CostWrapper>
              <S.CostWrapper>
                <span>Entrega</span>
                <span>R$ {formatCurrency(cart.deliveryCost)}</span>
              </S.CostWrapper>
              <S.TotalCostWrapper>
                <span>Total</span>
                <span>R$ {formatCurrency(cart.totalPrice)}</span>
              </S.TotalCostWrapper>
            </S.BillWrapper>

            <S.ConfirmPaymentButton>
              Confirmar Pedido
            </S.ConfirmPaymentButton>
          </S.ConfirmRequest>
        </S.SelectedCoffees>
      </form>
    </S.CheckoutContainer>
  )
}