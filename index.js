
/*let hour = 10;

if( hour >=6 && hour < 12
)

    console.log('Good Morning !')

else {
    console.log('good afternoon')
}*/
/*

for ( let i = 5 ; i >= 1 ; i--)
{
    if (i % 2 !==0) console.log(i);

}
*/

/*let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log (i);
    i++;
}*/

/*const person = {
    name: 'John Smith',
    age: 35
}

for (let key in person)
    console.log(key,person[key]);
const colors = ['red', 'green', 'yellow'];

for (let index in colors)
    console.log( index ,colors[index]);*/

/*
const person = {
    name: `Keith`,
    age: 28
};

for (let key in person) console.log(key, person[key]);
*/

/*
function greet (name, lastName)
{
    console.log(`Hello ` + name + ` ` + lastName);
}

greet(`john`, `doe`);

*/
/*
let number = max (2,3);


function max (a,b) {
    return (a < b) ? console.log (`b is greater ` + a) : console.log ('a is less than ' + b);

}*/


/*console.log(isLandscape(800,600))


function isLandscape (width, height)  {
    return (width > height) ? true : false;
}*/
/*const output = fizzBuzz(15);



function fizzBuzz(input) {
    if (typeof (input) !== "number") {
        return console.log ('not a number')
    }
    if ((input % 5 === 0) && (input %3 === 0 ) ) return console.log ('Fizz Buzz');
     if (input % 3 === 0) return console.log ('Fizz');
     if (input % 5 === 0) return console.log ('Buzz');

     return input;

}*/

checkSpeed(700);

function checkSpeed(speed) {
    const speedLimit = 70;
    const speedPoint = 5;
    const speedPointsLimit = 12;

    if (speed < speedLimit) {
        console.log('ok');
    }
    else {
        let points =  Math.floor ((speed - speedLimit) / speedPoint);
        if (points >= speedPointsLimit) {
            console.log(`You're Suspended`);
        }
        else{
            console.log("Drive Slowly");
        }

    }
}