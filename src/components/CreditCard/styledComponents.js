// Style your elements here
import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  display: flex;
`
export const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #344e7a;
  min-height: 100vh;
  width: 50%;
`
export const CardHeading = styled.h1`
  font-size: 30px;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
`
export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 10px;
  height: 350px;
  width: 600px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  justify-content: center;
`

export const Para = styled.p`
  color: white;
  font-size: 25px;

  font-weight: bold;
`

export const Para2 = styled.p`
  color: white;
  font-size: 25px;
  font-weight: bold;
`

export const HeadName = styled.p`
  font-size: 16px;
  color: white;
  margin-top: 30px;
  margin-bottom: 8px;
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  min-height: 100vh;
  width: 50%;
`
export const InputCont = styled.div`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 15px;
  width: 35%;
  box-shadow: 0px 4px 0px 4px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15px;
  height: 350px;
`
export const InputHeading = styled.h1`
  align-self: center;
  color: black;
  font-size: 15px;
`
export const Input = styled.input`
  background-color: transparent;
  width: 170px;
  height: 50px;
  border: 1px solid black;
  font-size: 15px;
  padding-left: 12px;
  margin-top: 30px;
`
