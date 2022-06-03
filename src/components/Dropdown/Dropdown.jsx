import React, { Component } from 'react';
import { Dropdown, Dropdown__menu } from './Dropdown.styled';

export default class Dropdowns extends Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };
  render() {
    return (
      <Dropdown>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>
        {this.state.visible && <Dropdown__menu></Dropdown__menu>}
      </Dropdown>
    );
  }
}
