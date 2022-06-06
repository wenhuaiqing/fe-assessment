export default function secToDatetime(sec) {
  const date = new Date(sec * 1000);
  return date.toLocaleString();
}

export function secToTimer(seconds) {
  const currentDateTime = new Date();
  const currentSeconds = currentDateTime.getTime() / 1000;
  const dif = Math.floor(seconds - currentSeconds);
  const secRemainder = dif % 60;
  const second = secRemainder >= 10 ? secRemainder : "0" + secRemainder;
  const secQuotient = Math.floor(dif / 60);

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
  if (dif >= 0) {
    return `${hour}:${minute}:${second}`;
  }
  return dif;
}
