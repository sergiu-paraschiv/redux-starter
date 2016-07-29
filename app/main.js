var React = require('react');
var ReactDOM = require('react-dom');

var Foo = require('modules/users');


window.render = function render(container) {
    ReactDOM.render(
        React.createElement(Foo),
        container
    );
}
