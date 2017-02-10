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
    if (this.getExponent > 0) {
      this.decimal[1] = parseInt('1' + this.getMantiza(), 2);
    }
    else {
      let a  = this.getMantiza() + '.1'
      // solo falta cuando es con coma saber como coger la mantiza
    }

  }

  getDecimalNumber() {
    this.setSign();
    this.setFirstPart();
    return this.decimal.join("");

  }
};
