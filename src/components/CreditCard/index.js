// Write your code here

import {useState} from 'react'

import {
  Main,
  CreditCardSection,
  CreditCardTitle,
  CreditCardImageContainer,
  CardNumberText,
  CardNameText,
  PaymentSection,
  PaymentContainer,
  PaymentMethodTitle,
  CardholderName,
  CardNumberInput,
  CardNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const [cardName, setCardName] = useState('')

  const onChangeCardName = event => {
    setCardName(event.target.value)
  }

  return (
    <Main>
      <CreditCardSection>
        <CreditCardTitle>CREDIT CARD</CreditCardTitle>
        <CreditCardImageContainer data-testid="creditCard">
          <CardNumberText> {cardNumber} </CardNumberText>
          <CardholderName> CARDHOLDER NAME </CardholderName>
          <CardNameText> {cardName.toUpperCase()} </CardNameText>
        </CreditCardImageContainer>
      </CreditCardSection>
      <PaymentSection>
        <PaymentContainer>
          <PaymentMethodTitle>Payment Method</PaymentMethodTitle>
          <CardNumberInput
            type="text"
            onChange={onChangeCardNumber}
            placeholder="Card Number"
            value={cardNumber}
          />
          <CardNameInput
            type="text"
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
            value={cardName}
          />
        </PaymentContainer>
      </PaymentSection>
    </Main>
  )
}

export default CreditCard
