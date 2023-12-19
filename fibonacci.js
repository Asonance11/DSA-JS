// function fib(n) {
// 	if (n <= 1) {
// 		return n;
// 	} else {
// 		return fib(n - 1) + fib(n - 2);
// 	}
// }

// optimized fib

function fib(n) {
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}

console.log(fib(5));
