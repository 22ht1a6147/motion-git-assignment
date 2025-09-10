/**
 * Validation helpers.
 * These are safe to copy and use — they are small utilities and not the full solution.
 */

const config = require('../config/config');

function isValidUrl(u) {
  if (!u || typeof u !== 'string') return false;
  // Basic check: must start with http:// or https:// and be non-whitespace
  const re = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
  return re.test(u);
}

function isValidValidity(v) {
  return Number.isInteger(v) && v > 0 && v < 60 * 24 * 365; // reasonable upper bound
}

function isValidShortcode(code) {
  if (!code || typeof code !== 'string') return false;
  const { SHORTCODE_MIN_LEN, SHORTCODE_MAX_LEN } = require('../config/config');
  const re = /^[A-Za-z0-9]+$/;
  return re.test(code) && code.length >= SHORTCODE_MIN_LEN && code.length <= SHORTCODE_MAX_LEN;
}

module.exports = {
  isValidUrl,
  isValidValidity,
  isValidShortcode
};
