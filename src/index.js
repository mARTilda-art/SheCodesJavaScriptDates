function formateDate() {
  let now = new Date();
  let months = [
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let month = months[now.getDay()];
  let day = days[now.getDay()];
  let year = now.getFullYear();
  let daynr = now.getDate();

  //console.log(now);
  //console.log(now.getMilliseconds());
  //console.log(now.getDate());
  //console.log(now.getFullYear());
  //console.log(now.getMonth());
  let date = `Today is ${day}, ${month} ${daynr}, ${year}`;
  return date;
}

console.log(formateDate(new Date()));
