function daysToXmas(date) {
  const christmasDate = new Date('Dec 25, 2021');
  const days = (christmasDate - date)/(1000*60*60*24);
  return Math.ceil(days);
}