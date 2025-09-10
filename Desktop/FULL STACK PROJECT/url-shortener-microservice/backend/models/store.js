/**
 * In-memory store model
 *
 * This module centralizes access to the in-memory store and
 * optional persistence to data/store.json.
 *
 * TODO: If you implement persistence, make writes safe (queue writes or write synchronously).
 *
 * This skeleton intentionally leaves persistence optional.
 */

const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'data', 'store.json');

let store = {};

/**
 * Load persisted store if present.
 * NOTE: Only call at startup.
 */
function loadFromDisk() {
  try {
    if (fs.existsSync(DATA_PATH)) {
      const raw = fs.readFileSync(DATA_PATH, 'utf8');
      store = JSON.parse(raw || '{}');
    }
  } catch (err) {
    // Use logging service to log err; do NOT console.log
    store = {};
  }
}

/**
 * Optionally persist to disk synchronously (simple).
 * TODO: Consider async queue in production.
 */
function persistToDisk() {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(store, null, 2), 'utf8');
  } catch (err) {
    // log via logging service
  }
}

/**
 * Accessors
 */
function exists(shortcode) {
  return Object.prototype.hasOwnProperty.call(store, shortcode);
}

function get(shortcode) {
  return store[shortcode] || null;
}

function create(shortcode, entry, persist = false) {
  store[shortcode] = entry;
  if (persist) persistToDisk();
  return store[shortcode];
}

function update(shortcode, entry, persist = false) {
  store[shortcode] = entry;
  if (persist) persistToDisk();
  return store[shortcode];
}

function all() {
  return store;
}

// Initialize load
loadFromDisk();

module.exports = {
  exists,
  get,
  create,
  update,
  all,
  persistToDisk
};
