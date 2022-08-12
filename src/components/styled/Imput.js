import styled from 'styled-components';
 
const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 15px;
  border: 1px solid #01013F;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: #01013F;
  }
`


export default Input;