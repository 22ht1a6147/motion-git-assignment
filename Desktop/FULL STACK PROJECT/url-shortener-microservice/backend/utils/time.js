/**
 * Time helpers for expiry calculations and comparisons
 */

function getExpiryIso(minutesFromNow) {
  const d = new Date(Date.now() + minutesFromNow * 60 * 1000);
  return d.toISOString();
}

function isExpired(isoTimestamp) {
  if (!isoTimestamp) return true;
  return new Date() > new Date(isoTimestamp);
}

module.exports = {
  getExpiryIso,
  isExpired
};
