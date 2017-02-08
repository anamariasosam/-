export default class Decimal {
	constructor(params) {
		this.binary = params.binary;
		this.decimal = [];
	};

  setSign() {
    this.decimal[0] = parseInt(this.binary[0], 10) ? '-' : '+'
    console.log('Signo', this.decimal[0]);
  }

  getBinary() {
    let a = this.binary.split("")
    let b = a.splice(1, 8).join("")
    console.log('ocho biys', b);
    return parseInt(b, 2);
  }

  getExponent() {
    console.log('Exponente', this.getBinary() - 127 );
    return this.getBinary() - 127
  }

  getMantiza() {
    let a = this.binary.split("")
    let b = a.splice(9, this.getExponent())
    return b.join('');
  }

  setFirstPart() {
    this.decimal[1] = parseInt('1' + this.getMantiza(), 2);

  }

  getDecimalNumber() {
    this.setSign();
    this.setFirstPart();
    return this.decimal.join("");

  }
};
