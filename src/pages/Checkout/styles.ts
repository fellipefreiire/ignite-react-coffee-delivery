import styled from "styled-components";

export const CheckoutContainer = styled.div`
  form {
    display: flex;
    justify-content: center;
    gap: 32px;
    max-width: 1440px;
    margin: auto;
    padding: 0 160px;
    margin-bottom: 240px;
  }
`

export const Request = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  h1 {
    font: ${({ theme: { fonts } }) => fonts.title["title-xs"]};
    color: ${({ theme: { colors } }) => colors["base-subtitle"]};
    margin-bottom: 4px;
  }
`

export const SelectedCoffees = styled.div`  
  h1 {
    font: ${({ theme: { fonts } }) => fonts.title["title-xs"]};
    color: ${({ theme: { colors } }) => colors["base-subtitle"]};
    margin-bottom: 16px;
  }
`

export const ConfirmRequest = styled.div`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${({ theme: { colors } }) => colors["base-card"]};
  padding: 40px;
  min-width: 428px;
`

export const SelectedCoffeeCard = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors["base-button"]};

  img {
    margin-right: 20px;
    width: 64px;
    height: 64px;
  }
`

export const CounterWrapper = styled.div`
  margin-right: 50px;
`

export const CoffeeTitle = styled.div`
  font: ${({ theme: { fonts } }) => fonts.text["regular-m"]};
  color: ${({ theme: { colors } }) => colors["base-subtitle"]};
  margin-bottom: 8px;
`

export const Counter = styled.div`
  display: flex;
  gap: 8px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    background-color: ${({ theme: { colors } }) => colors["base-button"]};
    border-radius: 6px;

    span {
      color: ${({ theme: { colors } }) => colors["base-title"]};
      font: ${({ theme: { fonts } }) => fonts.text["regular-m"]};
    }
    
    button {
      display: flex;
      align-items: center;
      border: 0;
      background-color: ${({ theme: { colors } }) => colors["base-button"]};
      cursor: pointer;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    border: 0;
    background-color: ${({ theme: { colors } }) => colors["base-button"]};
    color: ${({ theme: { colors } }) => colors["base-text"]};
    font: ${({ theme: { fonts } }) => fonts.components["button-s"]};
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
  }

  svg {
    color: ${({ theme: { colors } }) => colors.purple};
  }
`

export const PriceWrapper = styled.div`
  width: 100%;
  text-align: right;
`

export const Price = styled.span`
  color: ${({ theme: { colors } }) => colors["base-text"]};
  font: ${({ theme: { fonts } }) => fonts.text["bold-m"]};
`

export const BillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const BaseCostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CostWrapper = styled(BaseCostWrapper)`
  color: ${({ theme: { colors } }) => colors["base-text"]};
  font: ${({ theme: { fonts } }) => fonts.text["regular-m"]}; 
`

export const TotalCostWrapper = styled(BaseCostWrapper)`
  color: ${({ theme: { colors } }) => colors["base-subtitle"]};
  font: ${({ theme: { fonts } }) => fonts.text["bold-l"]};
`

export const ConfirmPaymentButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme: { colors } }) => colors.yellow};
  color: ${({ theme: { colors } }) => colors.white};
  font: ${({ theme: { fonts } }) => fonts.components["button-g"]};
  text-transform: uppercase;
  cursor: pointer;
`