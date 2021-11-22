import styled from 'styled-components'

export const ContainerElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`
export const FormElement = styled.form`
  width: 40%;
  height: 70vh;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 1px 0px 0px 2px #aaaaaa;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const InputElement = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
`
export const LabelElement = styled.label`
  font-size: 15px;
  color: #7e858e;
  margin-bottom: 0px;
`
export const SelectElement = styled.select`
  width: 100%;
  height: 35px;
`
export const OptionElement = styled.option`
  color: blue;
  font-size: 20px;
  height: 30px;
`
export const ButtonElement = styled.button`
  background-color: #35469c;
  color: white;
  font-size: 25px;
  width: 100%;
  align-self: flex-start;
  padding: 8px;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: #1e293b;
`

export const Image = styled.div`
  height: 50vh;
  width: 50%;
  background-image: url(${props => props.ImageUrl});
  background-size: cover;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const ParaElement = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`
