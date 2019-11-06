function fizzbuzz(num) {
	let result = "";
	if (num % 3 === 0) {
		result += "fizz";
	}
	if (num % 5 === 0) {
		result += "buzz";
	}
	return result.length !== 0 ? result : String(num);
}

function range(start, end) {
	return [...Array(end - start).keys()].map(x => x + start);
}

function fizzbuzzPrintRange(start, end) {
	range(start, end).map(fizzbuzz).forEach(elem => console.log(elem));
}

fizzbuzzPrintRange(0, 101)