import styled from 'styled-components';
 
const Input2 = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 5px;
  border: 1px solid #01013F;
  height: 22px;
     padding: ${props => props.padding};

  ::placeholder {
    color: #01013F;
  }
`


export default Input2;