import styled from 'styled-components'; 
 
const Parrafo = styled.h1`
  font-size: ${props => props.size};
  text-align: center;
  color:  ${props => props.color};
`;




export default Parrafo;