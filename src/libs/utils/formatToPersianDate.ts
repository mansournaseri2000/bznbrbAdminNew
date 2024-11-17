import moment from 'moment-jalaali';

// Initialize moment to use the Persian locale and Jalaali calendar
moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

/**
 * Converts an ISO date string to Persian date format (e.g., "24 فروردین").
 *
 * @param isoDate - The ISO date string (e.g., "2024-10-05T00:00:00Z").
 * @returns A string representing the Persian date (e.g., "24 فروردین").
 */

type Props = {
  isoDate: string;
  isFullData?: boolean;
};
export const formatToPersianDate = ({ isFullData = false, isoDate }: Props): string => {
  // Convert the ISO string to a moment object and format it in the Persian calendar
  if (isFullData) {
    const persianDate = moment(isoDate).format('jD jMMMM jYYYY');
    return persianDate;
  } else {
    const persianDate = moment(isoDate).format('jD jMMMM');
    return persianDate;
  }
};
