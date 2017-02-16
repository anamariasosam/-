export default class Decimal {
	constructor(params) {
		this.binary = params.binary;
		this.decimal = [];
	};

  setSign() {
    this.decimal[0] = parseInt(this.binary[0], 10) ? '-' : '+'
    console.log('Signo', this.decimal[0]);
  }

  getDecimal() {
    let a = this.binary.split("")
    let b = a.splice(1, 8).join("")
    console.log('ocho bits', b);
    console.log('decimal', parseInt(b, 2));
    return parseInt(b, 2);
  }

  getExponent() {
    console.log('Exponente', this.getDecimal() - 127 );
    return this.getDecimal() - 127
  }

  getMantiza() {
    let a = this.binary.split("")
    let b = a.splice(9, Math.abs(this.getExponent()))
    console.log('mantiza', b.join(''));
    return b.join('');
  }

  setFirstPart() {
		if (this.getExponent() > 0 ) {
			let index = this.getMantiza().length + 9;
			let array = this.binary.split("").splice(index, 32);
			console.log(array);
			let decimal = 0;
			for (var i = 0; i < array.length; i++) {
				if (parseInt(array[i], 10)) {
					decimal += Math.pow(2, -(i + 1));
				}
			}
			this.decimal[1] = parseInt('1' + this.getMantiza(), 2) + decimal;
		} else {
			this.decimal[1] = '0.'
			// aqui va la parte nueva 
		}

  }

  getDecimalNumber() {
    this.setSign();
    this.setFirstPart();
		console.log(this.decimal);
    return this.decimal.join("");

  }
};
