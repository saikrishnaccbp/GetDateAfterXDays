const addDays = require("date-fns/addDays");

const getAfterXDays = (days) => {
  const newdate = addDays(new Date(2020, 7, 22), days);
  return `${newdate.getDate()}-${
    newdate.getMonth() + 1
  }-${newdate.getFullYear()}`;
};

module.exports = getAfterXDays;
