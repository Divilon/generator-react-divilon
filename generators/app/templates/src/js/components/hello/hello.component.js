import React from 'react';
import { connect } from 'react-redux';

const Hello = React.createClass({
  propTypes: {
    message: React.PropTypes.string
  },

  render() {
    return (
      <div className="hello">{this.props.message}</div>
    );
  }
});

export { Hello };

function mapStoreToProps(store, ownProps) {
  return {
    message: store.hello.message
  }
}

export default connect(mapStoreToProps)(Hello);
