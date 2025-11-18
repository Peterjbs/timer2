/**
 * Shared utility functions for timer applications
 * This file contains common functions used across multiple timer HTML files
 */

/**
 * Sleep for a specified duration
 * @param {number} ms - Milliseconds to sleep
 * @param {AbortSignal} signal - Optional abort signal for cancellation
 * @returns {Promise} Promise that resolves after the specified time
 */
const sleep = (ms, signal) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve(true);
    }, ms);
    
    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timeout);
        reject(new DOMException('Aborted', 'AbortError'));
      });
    }
  });
};

/**
 * Pick a random element from an array
 * @param {Array} arr - Array to pick from
 * @returns {*} Random element from the array
 */
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Convert a filename to a title format
 * Removes file extension, replaces separators with spaces, capitalizes words
 * @param {string} s - String to convert
 * @returns {string} Formatted title string
 */
const toTitle = (s) => 
  (s || '')
    .replace(/\.[^/.]+$/, '')           // Remove file extension
    .replace(/[_\-]+/g, ' ')            // Replace underscores/dashes with spaces
    .trim()
    .split(/\s+/)
    .slice(0, 3)                         // Take first 3 words
    .map(w => w[0] ? w[0].toUpperCase() + w.slice(1) : '')
    .join(' ');

/**
 * Get a random start time in the middle portion of a video
 * Avoids the very beginning and end of clips
 * @param {Object|number} clipOrDuration - Clip object with duration property, or duration number
 * @returns {number} Random start time in seconds
 */
function randomMidStart(clipOrDuration) {
  let dur;
  
  // Handle both clip objects and raw duration numbers
  if (typeof clipOrDuration === 'object' && clipOrDuration !== null) {
    dur = Number.isFinite(clipOrDuration.duration) && clipOrDuration.duration > 1 
      ? clipOrDuration.duration 
      : 5;
  } else {
    dur = Number.isFinite(clipOrDuration) && clipOrDuration > 1 
      ? clipOrDuration 
      : 5;
  }
  
  const padStart = 0.5;
  const padEnd = 1.0;
  const min = padStart;
  const max = Math.max(min + 0.5, dur - padEnd);
  
  return min + Math.random() * (max - min);
}
