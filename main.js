/*node main.js
When you run the code, it should display the following, but with actual numbers instead of the xxx.

I average xxx miles each week.
I have driven a total of xxx miles. */

// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [100, 200, 300, 400, 500]

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (week of weeklyMiles) {
    totalMiles =+ week
}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles/weeklyMiles.length

// Output the average miles and the total miles to the console
console.log(`I average ${averageMiles} miles each week.`)
console.log(`I have driven a total of ${totalMiles} miles.`)

