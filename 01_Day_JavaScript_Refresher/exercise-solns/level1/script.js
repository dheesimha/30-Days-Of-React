const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]


// let arr = []

// let arr2 = [1, 2, 3, 4, 5]

// console.log(arr2.length);

// console.log(arr2[0], arr2[2], arr2[4]);

// let mixedDataTypes = [
//     5, "char", [1, 2, 3], 5.34, undefined
// ]

// console.log(mixedDataTypes);
// console.log((mixedDataTypes.length));


// let companies = ["Facebook", "Apple", "google", "Microsoft", "Oracle", "Amazon"]

// console.log(companies);

// console.log(companies.length);
// // companies[0] = "FACEBOOK"
// console.log(companies);
// console.log(companies.toString() + " are good IT companies");
// console.log(companies.includes("Amazon") ? "Found" : "Nope");
// console.log(companies.toString)
// console.log(companies.sort());
// console.log(companies.reverse());
// console.log(companies.slice(0, 3));
// console.log(companies.slice(3, 6));
// console.log(companies.slice(2));
// companies.shift()
// console.log(companies);

// companies.splice(3, 1)
// console.log(companies);

// companies.pop()
// console.log(companies);

// companies.splice(0, companies.length)
// console.log(companies);

// let text =
//     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// let words = text.split(' ')
// console.log(words);
// console.log(words.length);


// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// shoppingCart.splice(4, 1)
// shoppingCart[3] = 'Green Tea'


// console.log(shoppingCart);



// let ans = countries.includes('Ethiopia');
// ans ? console.log('Exists') : countries.push('Ethiopia')

// let ans = webTechs.includes('Sass')

// ans ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass') && console.log(webTechs);

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)

// console.log(fullStack)



// level 3 exercise

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// ages.sort()

// console.log(ages);

// console.log('Min age is ' + ages[0] + " and max age is " + ages[ages.length - 1]);

// let ageLength = ages.length
// if (ageLength % 2 == 1) {
//     console.log('The median age is ' + ages[Number(ageLength / 2)]);
// }
// else {
//     console.log('The median ages are ' + ages[Number(ageLength / 2)] + ' and ' + ages[Number(ageLength / 2) + 1])
// }


// console.log(countries.slice(0, 10));

// // console.log(countries[Number(countries.length / 2)]);

// // let middleLength = Number(countries.length / 2)

// let country1 = countries.slice(0, countries.length / 2)
// console.log(country1);

// let country3 = countries.slice(5, -1)
// console.log(country3);


// let num = 56
// if (num > 3) {
//     console.log(`${num} is greater than 3`);

// }

// else {
//     console.log(`${num} is less than 3`);
// }


// let weather = "w"

// switch (weather) {
//     case "rainy": console.log(`The weather is ${weather}`);
//         break

//     case "sunny": console.log(`The weather is hot and ${weather}`);
//         break


//     case "winter": console.log(`The weather is cold outside as it is ${weather}`)
//         break

//     default: console.log(`The temperature isn't properly known today .So keep a track of weather by looking out :)`);
// }


// let age = prompt('Enter your age')
// console.log(age);

// // switch (true) {

// //     case age < 18:
// //         let remaining = 18 - age
// //         console.log(`You are left with ${remaining} years to drive`);
// //         break


// //     case age >= 18: console.log("You are old enough to drive");
// //         break
// // }


// let myage = 20;

// switch (true) {
//     case myage > age:
//         let difference = myage - age
//         console.log(`I am ${difference} years older than you`);

//         break;

//     case age > myage:
//         difference = age - myage
//         console.log(`You are ${difference} years older than me`);
//         break

//     default:
//         break;
// }





// let a = 4, b = 3

// a > b ? console.log(`a is greater than b`) : console.log("b is greater than a");


// let num = prompt("Enter a number")
// num % 2 === 0 ? console.log(`${num} is an even number`) : console.log(`${num} is an odd number`);


// let score = prompt(`Enter a score between 0 and 100`)

// switch (true) {
//     case score >= 90 && score <= 100:
//         console.log("A");

//         break;

//     case score >= 70 && score <= 89:
//         console.log("B");
//         break;

//     case score >= 60 && score <= 69:
//         console.log("C");
//         break

//     case score >= 50 && score <= 59:
//         console.log("D");
//         break

//     case score >= 0 && score <= 49:
//         console.log("F")
//         break;

//     default: console.log("Enter a valid score ");
//         break;
// }


let season = prompt("Enter a month")

season = season.toLowerCase()

switch (season) {
    case "september" || "october" || "november":
        console.log("Autumn")
        break

    case "december" || "january" || "february":
        console.log("Winter")
        break

    case "march" || "april" || "may":
        console.log("Spring")
        break

    case "june" || "july" || "august":
        console.log("Summer")
        break


}
