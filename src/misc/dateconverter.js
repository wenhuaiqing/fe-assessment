export default function secToDatetime(sec) {
  const date = new Date(sec * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  //   const formattedTime =
  //     hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);

  return date.toLocaleString();
}