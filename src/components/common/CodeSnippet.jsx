import React from 'react';
import pretty from 'pretty';

export default class CodeSnippet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  toggleHtmlClick(e) {
    e.preventDefault();

    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const showCodeSnippet = this.props.toggle && !this.state.isOpen ? false : true;

    return (
      <div className="sg-code-snippet">
        {this.props.toggle && (
          <a href="#" className="link" onClick={e => this.toggleHtmlClick(e)}>
            {this.state.isOpen ? 'Hide HTML' : 'Show HTML'}
          </a>
        )}
        {showCodeSnippet && (
          <pre className={`language-${this.props.language}`}>
            <code className={`language-${this.props.language}`}>{pretty(this.props.code)}</code>
          </pre>
        )}
      </div>
    );
  }
}
