import React ,{Component} from 'react';
import ReactDom   from 'react-dom';

import {ButtonIr} from '../components/styled/ButtonIr.js'; 
import Imput2 from '../components/styled/Imput2.js'; 
class ButtonSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) { 
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> 
          <Imput2 radius="5px" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <ButtonIr type="submit">Ir</ButtonIr>
      </form>
    );
  }
}
 
export default ButtonSearch;