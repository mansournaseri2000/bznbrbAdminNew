import moment from 'moment-jalaali';

/**
 * Converts a Unix timestamp to a Persian date string in the format 'YYYY/MM/DD'.
 *
 * @param {number} timestamp - The Unix timestamp in milliseconds to convert.
 * @returns {string} - The Persian date string in 'YYYY/MM/DD' format.
 */
export function convertTimestampToPersianDate(timestamp: moment.MomentInput) {
  // Create a moment object from the timestamp
  const persianDate = moment(timestamp).locale('fa').format('jYYYY/jMM/jDD');

  return persianDate;
}
