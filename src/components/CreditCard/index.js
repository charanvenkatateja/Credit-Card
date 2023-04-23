// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardCont,
  CardHeading,
  Card,
  Para,
  Para2,
  HeadName,
  SecondContainer,
  InputCont,
  InputHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNo, setCardNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = e => {
    setCardNumber(e.target.value)
  }

  const onChangeName = e => {
    setName(e.target.value)
  }

  return (
    <MainContainer>
      <CardCont>
        <CardHeading>CREDIT CARD</CardHeading>
        <Card data-testid="creditCard">
          <Para>{cardNo}</Para>
          <HeadName>CARDHOLDER NAME</HeadName>
          <Para2>{name.toUpperCase()}</Para2>
        </Card>
      </CardCont>
      <SecondContainer>
        <InputCont>
          <InputHeading>Payment Method</InputHeading>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </InputCont>
      </SecondContainer>
    </MainContainer>
  )
}
export default CreditCard
