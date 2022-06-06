export default function fetchList() {
  fetch(
    "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10"
  ).then((response) => response.json());
  // .then((r) => {
  //   console.log(r.data.race_summaries);
  //   return r.data.race_summaries;
  // });
}
