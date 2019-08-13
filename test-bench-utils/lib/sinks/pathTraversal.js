'use strict';
const fs = require('fs');

const errMsg = (method, msg, safe) =>
  safe ? `Congrats, you are safe! Error from ${method}: ${msg}` : `Done!`;
const pre = (str) => `<pre>${str}</pre>`;

/**
 * @param {string} input attack vector
 * @param {Object} opts
 * @param {boolean=} opts.safe are we calling the sink safely?
 * @param {boolean=} opts.noop are we calling the sink as a noop?
 */
module.exports['fs.readFile'] = function readFile(
  input,
  { safe = false, noop = false } = {}
) {
  if (noop) return 'NOOP';

  const path = safe ? encodeURIComponent(input) : input;

  return new Promise((resolve) => {
    fs.readFile(path, (err, data) => {
      const result = err
        ? errMsg('readFile', err.message, safe)
        : pre(data.toString());

      resolve(result);
    });
  });
};

/**
 * @param {string} input attack vector
 * @param {Object} opts
 * @param {boolean=} opts.safe are we calling the sink safely?
 * @param {boolean=} opts.noop are we calling the sink as a noop?
 */
module.exports['fs.readFileSync'] = function readFileSync(
  input,
  { safe = false, noop = false } = {}
) {
  if (noop) return 'NOOP';

  const path = safe ? encodeURIComponent(input) : input;

  try {
    const result = fs.readFileSync(path).toString();
    return pre(result);
  } catch (err) {
    return pre(errMsg('readFileSync', err.message, safe));
  }
};

/**
 * @param {string} input attack vector
 * @param {Object} opts
 * @param {boolean=} opts.safe are we calling the sink safely?
 * @param {boolean=} opts.noop are we calling the sink as a noop?
 */
module.exports['fs.writeFile'] = async function writeFile(
  input,
  { safe = false, noop = false } = {}
) {
  if (noop) return 'NOOP';

  const path = safe ? encodeURIComponent(input) : input;

  return new Promise((resolve) => {
    fs.writeFile(path, 'stuff', (err, data) => {
      const result = err
        ? errMsg('readFile', err.message, safe)
        : `Wrote to ${path}`;

      resolve(result);
    });
  });
};

/**
 * @param {string} input attack vector
 * @param {Object} opts
 * @param {boolean=} opts.safe are we calling the sink safely?
 * @param {boolean=} opts.noop are we calling the sink as a noop?
 */
module.exports['fs.writeFileSync'] = function writeFileSync(
  input,
  { safe = false, noop = false } = {}
) {
  if (noop) return 'NOOP';

  const path = safe ? encodeURIComponent(input) : input;

  try {
    fs.writeFileSync(path, 'stuff');
    return `Wrote to ${path}`;
  } catch (err) {
    return pre(errMsg('writeFileSync', err.message, safe));
  }
};
