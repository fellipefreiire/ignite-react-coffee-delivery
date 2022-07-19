import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import * as S from './styles'

export const Address = () => {
  const { register } = useFormContext()

  return (
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
          <input
            className='cnb'
            type="text"
            placeholder='CEP'
            {...register('cep')}
          />
        </div>
        <div>
          <input
            className='full'
            type="text"
            placeholder='Rua'
            {...register('rua')}
          />
        </div>
        <div>
          <input
            className='cnb'
            type="text"
            placeholder='Número'
            {...register('numero')}
          />
          <input
            className='full'
            type="text"
            placeholder='Complemento'
            {...register('complemento')}
          />
        </div>
        <div>
          <input
            className='cnb'
            type="text"
            placeholder='Bairro'
            {...register('bairro')}
          />
          <input
            className='full'
            type="text"
            placeholder='Cidade'
            {...register('cidade')}
          />
          <input
            className='uf'
            type="text"
            placeholder='UF'
            {...register('uf')}
          />
        </div>
      </S.AddressInputs>
    </S.Address>
  )
}