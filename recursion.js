function sumRange(n) {
	if (n == 1) {
		return 1;
	} else {
		return n + sumRange(n - 1);
	}
}

function power(b, e) {
	if (e == 0) {
		return 1;
	} else {
		return b * power(b, e - 1);
	}
}

function factorial(n) {
	if (n == 1 || n == 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

function all(array, cb) {
	var copy = copy || array.slice();

	if (copy.length == 0) return true;

	if (cb(copy[0])) {
		copy.shift();
		return all(copy, cb);
	} else {
		return false;
	}
}

let allAreLessThanSeven = all([1, 2, 9], function (num) {
	return num < 7;
});

function productOfArray(array) {
	if (array.length === 0) {
		return 1;
	} else {
		return array.shift() * productOfArray(array);
	}
}

function contains(obj, value) {
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			return contains(obj[key], value);
		}
		if (obj[key] === value) {
			return true;
		}
	}
	return false;
}
let nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: 'foo2',
					},
				},
			},
		},
	},
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, 'foo'); // false
console.log(hasIt, doesntHaveIt);
