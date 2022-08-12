import styled from 'styled-components';
 
 export const ButtonISesion = styled.button`
  background: ${props => props.color} ;
   height: 40px;
   font-size: 12pt;
  border-radius: 5px;
  border: 2px solid ${props => props.bordercolor} ;
  color: ${props => props.textcolor};
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`