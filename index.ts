// technical test 10
const canPermutePalindrome = (str: string): boolean => {
	//dynamic programing
	let storedChar: any = {}
	for (let i: number = 0; i < str.length; i++) {
		storedChar[str[i]] = (storedChar[str[i]] + 1) || 1;
	}
	let oddChar = 0;
	for (let i in storedChar) {
		if (storedChar[i] % 2 === 1) oddChar++;
	}
	if (oddChar === 1 || oddChar === 0) return true;
	return false;
}
// console.log(canPermutePalindrome('abccbaabccbavsvf'))

// technical test 31
const checkIfSmallestLeadingChar = (arr: number[]): boolean => {
	if (arr.length === 1) return true;
	for (let i: number = 1; i < arr.length; i++) {
		if (arr[0] >= arr[i]) return false;
	}
	return true;
}

const subArrWithSmallestLeadingChar = (arr: number[]): number => {
	if (arr.length === 0) return 0;
	if (arr.length === 1) return 1;
	let sum = 0;
	for (let i: number = 0; i < arr.length; i++) {
		if (checkIfSmallestLeadingChar(arr.slice(i, arr.length))) sum++
	}
	return subArrWithSmallestLeadingChar(arr.slice(0, arr.length - 1)) + sum;
}
console.log(subArrWithSmallestLeadingChar([1, 2, 3, 4, 5]));
