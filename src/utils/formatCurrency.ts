export const formatCurrency = (price: number) => {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(price)

  return priceFormatted
}