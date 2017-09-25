function ArraySum(arr) {
	if (typeof arr === 'number') {
		return arr;
	} else if (typeof arr === 'object') {
		var total = 0;
		for (var i = 0; i < arr.length; ++i) {
			total += ArraySum(arr[i]);
		}

		return total;
	} else {
		return 0;
	}
}

exports.ArraySum = ArraySum;
