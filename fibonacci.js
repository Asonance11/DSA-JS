function fib(n) {
	sequence = [0, 1];

	while (sequence.length < n) {
		sequence.push(
			sequence[sequence.length - 1] + sequence[sequence.length - 2]
		);
	}

	return sequence.join(', ');
}

function fibsRec(n) {
	if (n <= 2) {
		return [0, 1].slice(0, n);
	} else {
		let sequence = fibsRec(n - 1);
		sequence.push(
			sequence[sequence.length - 1] + sequence[sequence.length - 2]
		);
		return sequence;
	}
}

console.log(fibsRec(8));
