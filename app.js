// vanilla
// Array.map(function (x) {
// 	return x * 2;
// });

// const add = function (x, y) {
// 	return x + y;
// };
// ES2015

const add = (x, y) => {
	return x + y;
};

// [1,2,3,4,5,6,7,8,9].reduce(function(max, currNum){
//     return Math.max(max,currNum);
// });

[1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((max, currNum) => {
	return Math.max(max, currNum);
});

// Shortcuts

[1, 2, 3, 4, 5, 6, 7, 8, 9].foreach((n) => {
	console.log(n * 10);
});

const greet = () => {
	console.log("Hello");
};

let nums = [1, 2, 3, 4, 5, 6];
nums.filter((nums) => nums % 2 === 0);

const double = (n) => n * 2;
// const double = (n) => {
//    return n*2;
//};

[1, 2, 3, 4, 5, 6].map((n) => {
	if (n % 2 === 0) {
		return even;
	}
	return odd;
});
//Conditional (ternary) operator
[1, 2, 3, 4, 5, 6].map((n) => (n % 2 === 0 ? "even" : "odd"));
//
const dailyRainTotals = [
	[1.2, 3.5, 4.6],
	[2.5, 6.5, 2],
	[1, 5, 4.2],
];
dailyRainTotals.map((hourlyRainTotals) => {
	return hourlyRainTotals.reduce((sum, inchesOfRain) => {
		return sum + inchesOfRain;
	});
});

//shorter
dailyRainTotals.map((hourlyRainTotals) =>
	hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
);
