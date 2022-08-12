import React ,{Component} from 'react';
import ReactDom   from 'react-dom';
import styled from 'styled-components';
const LabelCircle = styled.section`
padding: 3em;
border-radius: 100px;

background: #D9D9D9;
`;
const Label = styled.section`
padding:15px;
width: 6em;  
font-size: 18px;  
text-align: center;
font-weight: bold;
background: #FFFFFF;
`;

class LabelSeccion extends React.Component {
 
 

  render() {
    return ( 
      <Label>  
      <LabelCircle> 
      </LabelCircle> 
      {this.props.name}
      </Label> 

      
      );
  }
}

export default LabelSeccion;