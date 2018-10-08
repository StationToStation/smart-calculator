class SmartCalculator {
   constructor(startValue) {
    this.result = startValue;
    this.lastAddend = undefined;
    this.lastMultiplier = undefined;
    this.wasPowed = false;
  }
   toString() {
@@ -13,13 +14,15 @@ class SmartCalculator {
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
 @@ -31,6 +34,7 @@ class SmartCalculator {
      this.lastAddend = this.lastAddend * number;
    }
    this.lastMultiplier = number;
    this.wasPowed = false;
    return this;
  }
 @@ -42,11 +46,19 @@ class SmartCalculator {
      this.lastAddend = this.lastAddend / number;
    }
    this.lastMultiplier = 1 / number;
    this.wasPowed = false;
    return this;
  }
   pow(number) {
    if (this.lastMultiplier != undefined) {
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
@@ -58,6 +70,7 @@ class SmartCalculator {
    } else {
      this.result = Math.pow(this.result, number);
    }
    this.wasPowed = true;
    return this;
  }
  }
 
 module.exports = SmartCalculator;
