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
  const month = monthNames[Number(dateArr[0]) - 1]
  const day = dateArr[1];
  const year = dateArr[2];

  return `${month} ${day}, ${year}`;
};