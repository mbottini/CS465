function reverseNum(num) {
	return parseInt(
		String(num).split("")
			.reverse()
			.join(""))
}

function reverseNumArithmetic(num) {
	return reverseNumArithmeticHelper(num, 0);
}

function reverseNumArithmeticHelper(num, acc) {
	return num === 0 ?
		acc :
		reverseNumArithmeticHelper(Math.floor(num / 10), acc * 10 + num % 10);
}

let num = 231756;
console.log(`input: ${num}\noutput: ${reverseNum(num)}`);