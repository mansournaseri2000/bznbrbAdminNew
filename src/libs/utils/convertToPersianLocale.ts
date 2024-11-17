import moment from 'moment-jalaali';

export function convertToPersianTime(dateIsoString: string): string {
  // Parse the date in UTC (no offset)
  const date = moment.utc(dateIsoString); // Keep the time in UTC

  const hours = date.hour();
  const minutes = date.minute().toString().padStart(2, '0');
  let period = '';

  if (hours >= 0 && hours < 12) {
    period = 'صبح';
  } else if (hours === 12) {
    period = 'ظهر';
  } else if (hours > 12 && hours < 18) {
    period = 'بعدازظهر';
  } else {
    period = 'شب';
  }

  return `${hours}:${minutes} ${period}`;
}
