/**
 * Function to format date to format accepted by backend
 * @param {!Date} jsDate
 * @returns string in format "DD.MM.YYYY"
 */

function toBackendDateString(jsDate) {
  const day = jsDate.getDate() > 9 ? jsDate.getDate() : `0${jsDate.getDate()}`; //додати leading 0, якщо день не більше 9
  const monthRaw = jsDate.getMonth() + 1; //нумерація починається з 0, для нормального формату збільшуємо на 1
  const month = monthRaw > 9 ? monthRaw : `0${monthRaw}`; //додати leading 0, якщо місяць не більше 9
  const year = jsDate.getFullYear();
  return `${day}.${month}.${year}`;
}

module.exports = {
  toBackendDateString,
};
