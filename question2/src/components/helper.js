export const formatDate = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const dateArr = date.split("/");
  const month = monthNames[Number(dateArr[0]) - 1];
  const year = dateArr[2];
  let day = dateArr[1];

  if (day < 10) {
    day = Number(day.toString().split("")[1]);
  };

  return `${month} ${day}, ${year}`;
};