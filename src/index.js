class SmartCalculator {
  constructor(initialValue) {
      this.result = initialValue;
      this.lastAddend = undefined;
      this.lastMultiplier = undefined;
  }

  toString() {
      return this.result;
  }

  add(number) {
      this.result += number;
      this.lastAddend = number;
      this.lastMultiplier = undefined;
      return this;
  }

  subtract(number) {
      this.result -= number;
      this.lastAddend = -number;
      this.lastMultiplier = undefined;
      return this;
  }

  multiply(number) {
      if (this.lastAddend === undefined)
          this.result *= number;
      else {
          this.result = this.result - this.lastAddend + (this.lastAddend * number);
          this.lastAddend = this.lastAddend * number;
      }
      this.lastMultiplier = number;
      return this;
  }

  devide(number) {
      if (this.lastAddend === undefined)
          this.result /= number;
      else {
          this.result = this.result - this.lastAddend + (this.lastAddend / number);
          this.lastAddend = this.lastAddend / number;
      }
      this.lastMultiplier = 1 / number;
      return this;
  }

  pow(number) {
      if (this.lastMultiplier != undefined) {
          this.result = this.result / this.lastMultiplier * Math.pow(this.lastMultiplier, number);
          this.lastMultiplier = Math.pow(this.lastMultiplier, number);
      } else if (this.lastAddend != undefined) {
          this.result = this.result - this.lastAddend + Math.pow(this.lastAddend, number);
          this.lastAddend = Math.pow(this.lastAddend, number);
      } else {
          this.result = Math.pow(this.result, number);
      }
      return this;
  }

}

module.exports = SmartCalculator;
