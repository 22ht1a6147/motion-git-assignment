/**
 * Shortcode helpers (skeleton)
 *
 * NOTE: This file intentionally does not provide a complete "generate unique shortcode" implementation.
 * Implement uniqueness checks in the service layer where you can check against the storeModel.
 *
 * The helper below provides:
 * - validateShortcodeFormat()
 * - generateCandidate(length) -> a random candidate string (you must ensure uniqueness)
 */

const CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateCandidate(length = 6) {
  // Lightweight candidate generator – but you MUST check uniqueness against your store.
  let s = '';
  for (let i = 0; i < length; i++) {
    s += CHARSET[Math.floor(Math.random() * CHARSET.length)];
  }
  return s;
}

function validateShortcodeFormat(code, minLen = 4, maxLen = 12) {
  if (!code || typeof code !== 'string') return false;
  if (code.length < minLen || code.length > maxLen) return false;
  return /^[A-Za-z0-9]+$/.test(code);
}

module.exports = {
  generateCandidate,
  validateShortcodeFormat
};
