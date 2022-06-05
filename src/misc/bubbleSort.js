export default function ArrayList() {
  this.array = [];

  ArrayList.prototype.insert = function (item) {
    this.array.push(item);
  };

  ArrayList.prototype.swap = function (m, n) {
    let temp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = temp;
  };

  ArrayList.prototype.bubbleSort = function () {
    let length = this.array.length;
    for (let j = length - 1; j >= 0; j--) {
      for (let i = 0; i < j; i++) {
        if (
          this.array[i][1].advertised_start.seconds >
          this.array[i + 1][1].advertised_start.seconds
        ) {
          let temp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = temp;
        }
      }
    }
  };
}
