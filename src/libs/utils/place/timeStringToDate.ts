export function timeStringToDate(timeString: string | null): Date | undefined {
  if (!timeString) {
    return undefined; // Return undefined if timeString is null or undefined
  }

  const [hours, minutes] = timeString.split(':').map(Number); // Split the string and convert to numbers
  const now = new Date(); // Get current date
  now.setHours(hours, minutes, 0, 0); // Set hours and minutes, resetting seconds and milliseconds

  return now;
}
