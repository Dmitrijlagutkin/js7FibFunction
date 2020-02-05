function fibCycle(number) {
	if (!number) return 0
	let firstFibNumber = 0
	let secondFibNumber = 1
	let fibResult
	for (let i = 1; i < number; i++) {
		fibResult = firstFibNumber + secondFibNumber
		secondFibNumber = firstFibNumber
		firstFibNumber = fibResult
	}
	return fibResult
}

function fibRecursion(number, a = 0, b = 1) {
	if (!number) return 0
	return number - 1 > 2 ? fibRecursion(number - 1, b, a + b) : a + b
}

function callbackFunc() {
	console.log(`The ${number} element of Fibonacci sequence is ${res}`)
}

const getFibElement = (number, cb) => {
	res = number <= 100 ? fibRecursion(number) : fibCycle(number)
	return cb()
}

let res
let number
let i = 0
while (i < 20) {
	number = Math.ceil(2 + Math.random() * 198)
	getFibElement(number, callbackFunc)
	i++
}