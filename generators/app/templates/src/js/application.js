import React from 'react';
import { render } from 'react-dom';

const rootEl = document.getElementById('application');

const Application = React.createClass({
  render() {
    return (
      <h1><%= title %></h1>
    )
  }
});

render(
  <Application/>,
  rootEl,
  () => console.log('Replace log with startup callback')
);
