export function formatDate(inputDate) {
  if (inputDate != null) {
      const date = new Date(inputDate);
      if (!isNaN(date.getTime())) {
          const options = { month: 'short', day: 'numeric', year: 'numeric' };
          const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
          return formattedDate;
      }
  }
  return 'Invalid date';
}
