/**
 * Formats an ISO date string into a human-readable format.
 *
 * @param {string} isoString - The ISO date string to format.
 * @param {string} [locale='en-US'] - The locale to use for formatting.
 * @param {Object} [options={}] - Additional formatting options.
 * @returns {string} The formatted date string.
 */
export function formatDate(isoString, locale = 'en-US', options = {}) {
    const date = new Date(isoString);
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const formatOptions = { ...defaultOptions, ...options };
    return date.toLocaleString(locale, formatOptions);
  }
  