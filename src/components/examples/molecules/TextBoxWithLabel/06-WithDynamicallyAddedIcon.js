import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

export default class TypeDynamicallyTogglingIcon extends React.Component {
  state = {
    showIcon: false,
    value: '',
  };
  onChange = event => {
    this.setState({
      showIcon: event.target.value === '42',
      value: event.target.value,
    });
  };
  render() {
    const { showIcon, value } = this.state;

    return (
      <React.Fragment>
        <p>Type 42 in input field.</p>
        <TextBoxWithLabel
          labelText="Label for text box"
          type="text"
          value={value}
          onChange={this.onChange}
          withIcon
          iconName={showIcon ? 'ico_check' : null}
        />
      </React.Fragment>
    );
  }
}
