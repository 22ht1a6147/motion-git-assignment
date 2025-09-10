/**
 * Defines routes:
 *  - POST /shorturls      -> create short link
 *  - GET  /shorturls/:code -> get stats
 *  - GET  /:code          -> redirect
 *
 * Routes call controllers only. Controllers should not directly talk to Express internals.
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/shorturlController');

// Create short URL
router.post('/shorturls', controller.createShortUrl);

// Get statistics for a short URL
router.get('/shorturls/:shortcode', controller.getStats);

// Redirect shorthand route (must be last / more generic)
router.get('/:shortcode', controller.redirectShortUrl);

module.exports = router;
