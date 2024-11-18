import moment from 'moment';

/**
 * Check if two timestamps represent the same day (ignoring time) or if one of them is today.
 * @param {number} timestamp1 - First timestamp to compare (in milliseconds).
 * @param {number} timestamp2 - Second timestamp to compare (in milliseconds).
 * @returns {boolean} - True if the timestamps are the same day or one is today, otherwise false.
 */
export function areDatesSameOrCurrent(timestamp1: number, timestamp2: number): boolean {
  console.log('run');

  const momentDate1 = moment(timestamp1).startOf('day'); // Normalize to start of the day (ignores time)
  const momentDate2 = moment(timestamp2).startOf('day'); // Normalize to start of the day (ignores time)

  console.log(momentDate1.isSame(momentDate2));

  // Compare strictly by dates only
  return momentDate1.isSame(momentDate2);
}
