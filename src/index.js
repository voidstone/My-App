import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var createReactClass = require('create-react-class');

var Component =  createReactClass({
    render() {
      return <p>I am a component!</p>;
    }
  });

ReactDOM.render(React.createElement(Component), document.getElementById('root'));


