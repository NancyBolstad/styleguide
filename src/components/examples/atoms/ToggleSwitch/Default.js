import React from 'react';
import { ToggleSwitch } from '@telia/styleguide';

const exampleContainerStyle = {
  backgroundColor: '#f6f6f6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
};

export default class ToggleSwitchExample extends React.Component {
  state = {
    active: 'left',
  };
  render() {
    return (
      <div style={exampleContainerStyle}>
        <ToggleSwitch
          active={this.state.active}
          leftLabel="Beholde nummer"
          rightLabel="Nytt nummer"
          leftOnClickHandler={() => this.setState({ active: 'left' })}
          rightOnClickHandler={() => this.setState({ active: 'right' })}
        />
      </div>
    );
  }
}
