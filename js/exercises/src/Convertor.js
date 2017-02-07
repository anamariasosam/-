export default class Convertor {
	constructor(params) {
		this.number = params.number;
		this.binary32Bits = [];
	};

	toBin() {
    let n = Number(this.number).toString(2);
    console.log('Binario:', n);
		return n;
	};

  getIntegerPart() {
    let n = this.toBin().split(".")[0]
    console.log('Parte Entera', n);
    return n;
  };

  getFloatPart() {
    let n = this.toBin().split(".")[1]
    console.log('Parte Decimal', n);
    return n;
  };

  setFirstBit() {
    this.binary32Bits[0] = this.number > 0 ? 0 : 1
    console.log('primer bit', this.binary32Bits[0]);
  }

  isInt() {
    return this.number % 1 === 0;
  }

  getFirstBit() {
    return this.binary32Bits[0]
  }

  setEightBits() {
    if (this.getIntegerPart() > 0) {
      let array = this.getIntegerPart().split("").map(Number);
      let index = 0;

      for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
          index = i + 1;
          break;
        }
      }
      let exponent = (array.length - index) + 127;
      this.binary32Bits[1] = Number(exponent).toString(2);
    } else {
      // let array = this.getFloatPart().split("").map(Number);
      // let index = 0;
      // for (let i = 0; i < array.length; i++) {
      //   if (array[i] === 1) {
      //     index = i + 1;
      //     break;
      //   }
      // }
      // let exponent = 127 - (array.length - index);
      // console.log(index);
      // this.binary32Bits[1] = Number(exponent).toString(2);
    }

  }

  getBinaryNumber() {
    this.setFirstBit();
    this.setEightBits();
    return this.binary32Bits.join(" ").toString();
  }
};
