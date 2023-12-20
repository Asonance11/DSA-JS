function mergeSort(array) {
	if (array.length < 2) {
		return array;
	} else {
		const half = Math.ceil(array.length / 2);
		let firstHalf = array.slice(0, half);
		let secondHalf = array.slice(half);

		return merge(mergeSort(firstHalf), mergeSort(secondHalf));
	}
}

function merge(firstArray, secondArray) {
	let sorted = [];
	while (firstArray.length > 0 && secondArray.length > 0) {
		if (firstArray[0] < secondArray[0]) {
			sorted.push(firstArray.shift());
		} else {
			sorted.push(secondArray.shift());
		}
	}
	return sorted.concat(firstArray, secondArray);
}

const unSortedArray = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(mergeSort(unSortedArray));
