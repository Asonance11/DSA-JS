// using a for loop
// function sumTo(n) {
// 	let sum = 0;
// 	for (i = 0; i <= n; i++) {
// 		sum += i;
// 	}

// 	return sum;
// }

// using recursion
// function sumTo(n) {
// 	if (n == 1) {
// 		return 1;
// 	} else {
// 		return n + sumTo(n - 1);
// 	}
// }

// using AP formula

function sumTo(n) {
	return (n * (n + 1)) / 2;
}

console.log(sumTo(100));
