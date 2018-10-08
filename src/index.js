class SmartCalculator {
  constructor(startValue) {
    this.result = startValue;
    this.lastAddend = undefined;
    this.lastMultiplier = undefined;
    this.lastPow = undefined;
  }

  toString() {
    return this.result;
  }

  add(number) {
    this.result += number;
    this.lastAddend = number;
    this.lastMultiplier = undefined;
    this.lastPow = undefined;
    return this;
  }

  subtract(number) {
    this.result -= number;
    this.lastAddend = -number;
    this.lastMultiplier = undefined;
    this.lastPow = undefined;
    return this;
  }

  multiply(number) {
    if (this.lastAddend === undefined)
      this.result *= number;
    else {
      this.result += this.lastAddend *( number-1);
      this.lastAddend = this.lastAddend * number;
    }
    this.lastMultiplier = number;
    this.lastPow = undefined;
    return this;
  }

  devide(number) {
    if (this.lastAddend === undefined)
      this.result /= number;
    else {
      this.result = this.result- this.lastAddend +this.lastAddend/number;// (1-number) / number;
      this.lastAddend = this.lastAddend / number;
    }
    this.lastMultiplier = 1 / number;
    this.lastPow = undefined;
    return this;
  }

  pow(number) {
    if (this.lastMultiplier != undefined & this.lastAddend != undefined) {
      if (this.lastPow!=undefined) {
        this.result=this.result - this.lastAddend+this.lastAddend/Math.pow(this.lastMultiplier,this.lastPow)*Math.pow(this.lastMultiplier, Math.pow(this.lastPow,number));
        this.lastMultiplier = Math.pow(this.lastMultiplier, Math.pow(this.lastPow,number)/this.lastPow);
        this.lastPow*=number;
      }
      this.result += this.lastAddend * (Math.pow(this.lastMultiplier, number - 1)-1);
      this.lastMultiplier = Math.pow(this.lastMultiplier, number);
    } else if (this.lastMultiplier != undefined) {
      this.result *= Math.pow(this.lastMultiplier, number-1);
      this.lastMultiplier = Math.pow(this.lastMultiplier, number);
    } else if (this.lastAddend < 0 & number % 2 == 0) {
      this.result = this.result - this.lastAddend - Math.pow(this.lastAddend, number);
      this.lastAddend = - Math.pow(this.lastAddend, number);
    } else if (this.lastAddend != undefined) {
      this.result = this.result - this.lastAddend + Math.pow(this.lastAddend, number);
      this.lastAddend = Math.pow(this.lastAddend, number);
    } else {
      this.result = Math.pow(this.result, number);
    }
    this.lastPow = number;
    return this;
  }

}

module.exports = SmartCalculator;
