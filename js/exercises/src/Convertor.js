export default class Convertor {
	constructor(params) {
		this.number = params.number;
	};

	toBin() {
		return Number(this.number).toString(2);
	};

  getIntegerPart() {
    return this.numberToBin().split(".")[0]
  };

  getFloatPart() {
    return this.numberToBin().split(".")[1];
  };
};
