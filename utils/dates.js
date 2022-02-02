function formatDate(userDate) {
  let date = new Date(userDate)
  let year = date.getFullYear().toString()
  let month = (date.getMonth() + 1).toString()
  let day = date.getDate().toString()
  console.log(day.toString().length === 1)
  if (day.length === 1) day = '0'.concat(day)
  if (month.length === 1) month = '0'.concat(month)
  // format from M/D/YYYY to YYYYMMDD
  return year + month + day
}

console.log(formatDate('12/31/2014'))
