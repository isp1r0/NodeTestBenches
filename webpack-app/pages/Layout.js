const React = require('react');

// eslint-disable-next-line react/prop-types
module.exports = function Layout({ children }) {
  return React.createElement(
    'html',
    {
      lang: 'en',
    },
    React.createElement(
      'head',
      null,
      React.createElement('meta', {
        charSet: 'utf-8',
      }),
      React.createElement('meta', {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge',
      }),
      React.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      }),
      React.createElement('title', null, 'Contrast Webpack Sandbox'),
      React.createElement('link', {
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
        rel: 'stylesheet',
        integrity:
          'sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu',
        crossOrigin: 'anonymous',
      }),
      React.createElement('link', {
        href: '/assets/app.css',
        rel: 'stylesheet',
      }),
      React.createElement('script', {
        src: 'https://code.jquery.com/jquery-2.2.4.min.js',
        integrity: 'sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=',
        crossOrigin: 'anonymous',
      }),
      React.createElement('script', {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js',
        integrity:
          'sha384-pPttEvTHTuUJ9L2kCoMnNqCRcaMPMVMsWVO+RLaaaYDmfSP5//dP6eKRusbPcqhZ',
        crossOrigin: 'anonymous',
      }),
    ),
    React.createElement(
      'body',
      null,
      React.createElement(
        'nav',
        {
          className: 'banner-dark navbar navbar-inverse navbar-fixed-top',
        },
        React.createElement(
          'div',
          {
            className: 'container-fluid',
          },
          React.createElement(
            'div',
            {
              className: 'navbar-header',
            },
            React.createElement(
              'button',
              {
                type: 'button',
                className: 'navbar-toggle collapsed',
                'data-toggle': 'collapse',
                'data-target': '#navbar',
                'aria-expanded': 'false',
                'aria-controls': 'navbar',
              },
              React.createElement('span', {
                className: 'icon-bar',
              }),
              React.createElement('span', {
                className: 'icon-bar',
              }),
              React.createElement('span', {
                className: 'icon-bar',
              }),
            ),
            React.createElement(
              'a',
              {
                className: 'navbar-brand',
                href: '#',
              },
              'Contrast Webpack TestBench',
            ),
          ),
        ),
      ),
      React.createElement(
        'div',
        {
          className: 'container-fluid',
        },
        React.createElement(
          'div',
          {
            className: 'row',
          },
          React.createElement('div', {
            id: 'navbar',
            className: 'col-sm-3 col-md-2 sidebar',
          }),
          React.createElement(
            'div',
            {
              className:
                'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main',
            },
            children,
            React.createElement('hr', null),
            React.createElement(
              'footer',
              null,
              React.createElement(
                'p',
                null,
                `© ${new Date().getFullYear()} Contrast, Inc.`,
              ),
            ),
          ),
        ),
      ),
    ),
  );
};
