for (let i = 0; i < 100; i++) { // for loop to iterate over a set of numbers between 1 and 100
    if (i % 15 === 0) // conditional check to see if i is divisible by both 3 and 5
        console.log("🛰", i);
    else if (i % 3 === 0) // conditional check to see if i is divisible by 3
        console.log("👽", i);
    else if (i % 5 === 0) // conditional check to see if i is divisible by 5
        console.log("🚀", i);
    else // conditional check to see if i is neither divisible by 3 or 5
        console.log("💩", i)
}