const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const splitNumber = (N, n) => {
    if (N < n) {
        throw 'The number is too small to be split';
        return;
    }

    const numbers = Array(n);

    let number = N;
    let sum = 0;
    for (let index = 0; index < n; index++) {
        if (index == n - 1) {
            numbers[index] = number;
            break;
        }
        const randomNumber = random(1, (N - sum) - (n - index - 1));
        number -= randomNumber;
        sum += randomNumber;
        numbers[index] = randomNumber;
    }
    return numbers;
}

const testDistribution = function (N, n, M) {
    const map = {};

    for (let i = 0; i < M; i++) {
        const el = splitNumber(N, n).join(',');
        if (!map[el]) {
            map[el] = 1
        } else {
            map[el]++;
        }
    }
	
	for (let key in map) {
		map[key] = ((map[key] / M) * 100).toFixed(2) + ' %';
	}
    return map;
}

module.exports = {
	splitNumber,
	testDistribution
}