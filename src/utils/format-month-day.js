import dayjs from "dayjs";

function formatMonthDay(date) {
  console.log(date);
  return dayjs(date).format("MM月DD日");
}

function formatMonthDayAddOneDay(date) {
  return formatMonthDay(dayjs(date).add(1, "day"));
}

function getStayDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day");
}

export { formatMonthDay, formatMonthDayAddOneDay, getStayDays };
