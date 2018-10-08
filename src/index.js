class SmartCalculator {
  constructor(startValue) {
    this.result = startValue;
    this.lastAddend = undefined;
    this.lastMultiplier = undefined;
    this.wasPowed = false;
  }

  toString() {
    return this.result;
  }

  add(number) {
    this.result += number;
    this.lastAddend = number;
    this.lastMultiplier = undefined;
    this.wasPowed = false;
    return this;
  }

  subtract(number) {
    this.result -= number;
    this.lastAddend = -number;
    this.lastMultiplier = undefined;
    this.wasPowed = false;
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
    this.wasPowed = false;
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
    this.wasPowed = false;
    return this;
  }

  pow(number) {
    if (this.wasPowed) {
      this.wasPowed = true;
      return this;
    }
    if (this.lastMultiplier != undefined & this.lastAddend != undefined) {
      this.result = this.result - this.lastAddend + this.lastAddend * Math.pow(this.lastMultiplier, number - 1);
      this.lastMultiplier = Math.pow(this.lastMultiplier, number);
    } else if (this.lastMultiplier != undefined) {
      this.result = this.result / this.lastMultiplier * Math.pow(this.lastMultiplier, number);
      this.lastMultiplier = Math.pow(this.lastMultiplier, number);
    } else if (this.lastAddend < 0 & number % 2 == 0) {
      this.result = this.result - this.lastAddend - Math.pow(this.lastAddend, number);
      this.lastAddend = -1 * Math.pow(this.lastAddend, number);
    } else if (this.lastAddend != undefined) {
      this.result = this.result - this.lastAddend + Math.pow(this.lastAddend, number);
      this.lastAddend = Math.pow(this.lastAddend, number);
    } else {
      this.result = Math.pow(this.result, number);
    }
    this.wasPowed = true;
    return this;
  }

}

module.exports = SmartCalculator;
