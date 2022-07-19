import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useCart } from '../../store/contexts/CartContex'
import { formatCurrency } from '../../utils/formatCurrency'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { Address } from './components/Address'
import { Payment } from './components/Payment'

const cartFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'O CEP é obrigatório'),
  rua: zod.string().min(1, 'A rua é obrigatória'),
  numero: zod.string().min(1, 'O número é obrigatório'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'O bairro é obrigatório'),
  cidade: zod.string().min(1, 'A cidade é obrigatória'),
  uf: zod.string().min(2, 'A UF é obrigatória'),
})

type CartFormData = zod.infer<typeof cartFormValidationSchema>

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [paymentError, setPaymentError] = useState(false)
  const navigate = useNavigate()

  const { cart, removeFromCart, addCoffeeFromCheckout, subtractCofeeFromCheckout, submitRequest } = useCart()

  const handleRemoveCoffeeFromCart = (coffeeId: string) => {
    removeFromCart(coffeeId)
  }

  const handleAddCoffeeQuantity = (coffeeId: string) => {
    addCoffeeFromCheckout(coffeeId)
  }

  const handleSubtractCoffeeQuantity = (coffeeId: string) => {
    subtractCofeeFromCheckout(coffeeId)
  }

  const cartForm = useForm<CartFormData>({
    resolver: zodResolver(cartFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit } = cartForm

  const handleSumbitCart = (data: CartFormData) => {
    try {
      if (cart.paymentMethod === '') {
        setPaymentError(true)
        return
      }
      const coffees = cart.coffees.map(coffee => {
        return {
          id: coffee.id,
          title: coffee.title,
          price: coffee.price,
          quantity: coffee.quantity,
        }
      })

      const request = {
        id: new Date().getTime(),
        coffees: coffees,
        address: data,
        totalCoffees: Number(cart.totalCoffees.toFixed(2)),
        deliveryCost: Number(cart.deliveryCost.toFixed(2)),
        totalPrice: Number(cart.totalPrice.toFixed(2)),
        paymentMethod,
        purchasedDate: new Date()
      }

      submitRequest(request)

      setPaymentError(false)

      navigate('/success')
    } catch (err) {
      if (err instanceof zod.ZodError) {
        return {
          success: false,
          errors: err.flatten()
        }
      } else {
        throw err
      }
    }
  }

  return (
    <S.CheckoutContainer>
      <form onSubmit={handleSubmit(handleSumbitCart)}>
        <S.Request>
          <h1>Complete seu pedido</h1>
          <FormProvider {...cartForm}>
            <Address />
          </FormProvider>
          <Payment paymentError={paymentError} />
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

            <S.ConfirmPaymentButton type='submit'>
              Confirmar Pedido
            </S.ConfirmPaymentButton>
          </S.ConfirmRequest>
        </S.SelectedCoffees>
      </form>
    </S.CheckoutContainer>
  )
}