export default class Binary {
	constructor(params) {
		this.number = params.number;
		this.binary32Bits = [];
	};

	toBin() {
    let n = Number(this.number).toString(2);
    console.log('Binario:', n);
		return Math.abs(n).toString();
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
      this.setIntegerPartEightBits();
    } else {
      this.setFloatPartEightBits();
    }
  }

	setIntegerPartEightBits() {
		let array = this.getIntegerPart().split("").map(Number);
		const value = this.getIndex(array);
		const exponent = 127 + (array.length - value);
		this.binary32Bits[1] = Number(exponent).toString(2);

		this.binary32Bits[2] = this.setTwentyThreeBits(array, value);

	}

	setTwentyThreeBits(array, value) {
		array.splice(value - 1, 1);
		let mantiza = array.join("");
		let mantiza23bits = new Array(23).fill(0);

		if (!(this.getFloatPart() === undefined)) {
			 mantiza += this.getFloatPart();
		}

		mantiza.split("")
		for (let i = 0; i < mantiza.length; i++) {
			mantiza23bits[i] = mantiza[i];
		}

		return mantiza23bits.join("")
	}

	setFloatPartEightBits() {
		let array = this.getFloatPart().split("").map(Number);
		const value = this.getIndex(array);

		const exponent = 127 - value;
		this.binary32Bits[1] = '0' + Number(exponent).toString(2);


		let mantiza = new Array(23).fill(0);
		this.binary32Bits[2] = mantiza.join("")
	}

	getIndex(array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] === 1) {
				return i + 1;
			}
		}
	}

  getBinaryNumber() {
    if (this.number == 0) {
      this.binary32Bits = new Array(32).fill(0)
      return this.binary32Bits.join("");
    } else {
      this.setFirstBit();
      this.setEightBits();
      console.log('resultado final',this.binary32Bits);
      return this.binary32Bits.join(" ");
    }

  }
};
