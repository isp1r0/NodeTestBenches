'use strict';
const libxmljs = require('libxmljs');
const libxmljs2 = require('libxmljs2');

const pre = (str) => `<pre>${str}</pre>`;

/**
 * @param {string} input user input string
 * @param {Object} opts
 * @param {boolean=} opts.safe are we calling the sink safely?
 * @param {boolean=} opts.noop are we calling the sink as a noop?
 */
module.exports['libxmljs.parseXmlString'] = async function parseXmlString(
  input,
  { safe = false, noop = false } = {}
) {
  if (noop) return 'NOOP';

  const result = libxmljs.parseXmlString(input, { noent: !safe });
  return pre(result);
};

module.exports['libxmljs2.parseXml'] = async function parseXml(
  input,
  { safe = false, noop = false } = {}
) {
  if (noop) return 'NOOP';

  const result = libxmljs2.parseXml(input, { noent: !safe });
  return pre(result);
};
