var React = require('react'),
    ReactDom = require('react-dom'),
    App = require('./components/app');
require('./index.css');

ReactDom.render(
    <App/>,
    document.getElementById('app')
);