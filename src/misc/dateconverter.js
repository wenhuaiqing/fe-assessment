export default function secToDatetime(sec) {
  const date = new Date(sec * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  //   const formattedTime =
  //     hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return date.toLocaleString();
}

export function secToTimer(seconds) {
  const secRemainder = seconds % 60;
  const second = secRemainder >= 10 ? secRemainder : "0" + secRemainder;
  console.log(secRemainder);
  const secQuotient = Math.floor(seconds / 60);
  console.log(secQuotient);

  const minQuotient = Math.floor(secQuotient / 60);

  const minRemainder = minQuotient % 60;
  let minute = "";

  if (secQuotient < 10) {
    minute = "0" + secQuotient;
  } else if (secQuotient < 60) {
    minute = secQuotient;
  } else {
    minute = minRemainder;
  }

  const hour = minQuotient >= 10 ? minQuotient : "0" + minQuotient;
  console.log(minRemainder);

  return `${hour}:${minute}:${second}`;
}
