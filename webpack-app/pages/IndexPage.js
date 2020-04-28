const React = require('react');
const Layout = require('./Layout.js');

module.exports = function Index() {
  return React.createElement(
    Layout,
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        {
          className: 'page-header',
        },
        'Contrast Webpack Test Bench',
      ),
      React.createElement('div', {
        style: {
          minHeight: '300px',
        },
      }),
    ),
  );
};
