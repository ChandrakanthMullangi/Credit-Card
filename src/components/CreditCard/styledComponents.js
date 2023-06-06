// Style your elements here

import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const CreditCardSection = styled.section`
  background-color: #3b4b69;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 50%;
  }
`

export const CreditCardTitle = styled.h1`
  font-size: 24px;
  font-family: Roboto;
  color: #ffffff;
  border-bottom: 5px solid #ffd773;
`

export const CreditCardImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 250px;
  width: 400px;
  border-radius: 25px;
  margin-top: 10px;
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin-top: 100px;
  }
`

export const CardNumberText = styled.p`
  font-size: 30px;
  font-family: Roboto;
  color: #ffffff;
  margin-top: 35px;
`

export const CardholderName = styled.p`
  font-size: 16px;
  font-family: Roboto;
  color: #ffffff;
  margin-bottom: 0px;
  font-weight: normal;
`

export const CardNameText = styled.p`
  font-size: 20px;
  font-family: Roboto;
  color: #ffffff;
  font-weight: bold;
`

export const PaymentSection = styled.section`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100vh;
  }
`

export const PaymentContainer = styled.div`
  height: 250px;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border-radius: 10px;
`

export const PaymentMethodTitle = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  margin-bottom: 0px;
`

export const CardNumberInput = styled.input`
  width: 300px;
  font-family: Roboto;
  font-size: 14px;
  padding: 4px 8px;
  outline: none;
`

export const CardNameInput = styled.input`
  width: 300px;
  font-family: Roboto;
  font-size: 14px;
  padding: 4px 8px;
  outline: none;
`
