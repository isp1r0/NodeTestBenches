'use strict';
/**
 * This sink only exists to generate sinkData, the actual implementation is unique
 * in each framework.
 */

module.exports.upload = async function upload(input) {
  return input;
};
