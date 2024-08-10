/* QUESTION ONE
Write a function named countVowels that takes a single string as input and returns the number of vowels present in the
string. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can be either uppercase or lowercase.*/

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
//Examples
console.log("QUESTION ONE ANSWER")
console.log(countVowels("hello world"));
console.log(countVowels("The quick brown fox"))
console.log(countVowels("AEIOU"))
console.log(countVowels("Python Programming"))

/*QUESTION TWO
Write a function named reverseString that takes a single string as input and returns a new string with the characters in
reverse order.*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Examples
console.log("QUESTION TWO ANSWER")
console.log(reverseString("hello"));             
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));
console.log(reverseString("A man a plan a canal Panama"));

/*QUESTION THREE
Write a function named filterEvenNumbers that takes an array of numbers as input and returns a new array containing
only the even numbers.*/

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Examples
console.log("QUESTION THREE ANSWER")
console.log(filterEvenNumbers([1, 2, 3, 4, 5]));
console.log(filterEvenNumbers([10, 15, 20, 25]));
console.log(filterEvenNumbers([7, 11, 13]));
console.log(filterEvenNumbers([0, -2, -4]));
