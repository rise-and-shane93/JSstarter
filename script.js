/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
job = 'teacher';
console.log(job);
*/

/*************************
Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + '. Is he married? ' + isMarried);

//Variable mutation (to change the value of a variable)
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*************************
Basic Operators

var now, yearJohn, yearMark;
now = 2018;
var ageJohn = 28;
var ageMark = 33;

yearJohn = now - 28;
yearMark = now - 28;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Hello world');
var x;
console.log(typeof x);
*/
/*************************
Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
var x, y;
x = y = (3+5) * 4 - 6; //8 * 4 - 6 then 32 - 6 finally 26
console.log(x,y);

//more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*----------
Coding Challenge
----------
var massMark = 84; //kg
var heightMark = 2; //m
var massJohn = 90; //kg
var heightJohn = 1.9; //m

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiCompare = massMark > massJohn;

console.log("Is Mark's BMI higher than John's? " + bmiCompare);
*/

/*----------
If/Else Statements
----------

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married.');
}

var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married.');
}

var massMark = 84; //kg
var heightMark = 2; //m
var massJohn = 90; //kg
var heightJohn = 1.9; //m

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
//var bmiCompare = massMark > massJohn;

//console.log("Is Mark's BMI higher than John's? " + bmiCompare);
*/

/*----------
Boolean Logic
----------*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age > 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*--------------------
The Ternary Operator and Switch Statements
--------------------

var firstName = 'John';
var age = 22;
*/
//ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';

// console.log(firstName + ' is drinking ' + drink + ' .');

//switch statement
// var job = 'teacher';
/*
switch (job) {
    case 'teacher':
    case 'instructor': 
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' driver for Uber.');
        break;
    case 'designer':
        console.log(firstName + 'designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
*/
/*--------------------
Truthy and False values and equality operators
--------------------

falsy values: undefined, null, 0, '', NaN
truthy values: NOT falsy values

var height;
height = 23;
if (height) {
    console.log('variable is defined');
} else {
    console.log('variable has not been defined');
}

//equality operators
if (height == '23') {
    console.log('the == operator does type coercion');
}*/

/*--------------------
Coding Challenge
--------------------
var teamJohn = (89 + 120 + 103) / 3;
var teamMike = (116 + 94 + 123) / 3;
var teamMary = (97 + 134 + 105) / 3;

switch (true) {
    case teamJohn > teamMike && teamJohn > teamMary:
        console.log('John\'s team wins with ' + teamJohn + ' points!');
        break;
    case teamMike > teamJohn && teamMike > teamMary:
        console.log('Mike\'s team wins with ' + teamMike + ' points!');
        break;
    case teamMary > teamJohn && teamMary > teamMike:
        console.log('Mary\'s team wins with ' + teamMary + ' points!');
        break;
    default:
        console.log('The games are tied!' + teamJohn + teamMary + teamMike);
}

if (teamJohn > teamMike && teamJohn > teamMary) {
    console.log('John\'s team wins with ' + teamJohn + ' points!');
} else if (teamMike > teamJohn && teamMike > teamMary) {
    console.log('Mike\'s team wins with ' + teamMike + ' points!');
} else if (teamMary > teamJohn && teamMary > teamMike) {
    console.log('Mary\'s team wins with ' + teamMary + ' points!');
} else {
    console.log('there is a tie');
}
*/
/*----------
Functions
----------

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1965);
var ageShane = calculateAge(1993);

console.log(ageJohn, ageMike, ageShane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John');

*/
/*----------
Function Statements and Expressions
----------*/
//this is another way to write functions in JS
//a var where the function result is assigned to it or function expression
// var whatDoYouDo = function(job, firstName) {

// }

//function declaration
/*
function whatDoYouDo(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
            //no need to add the break statement since the return statement exits the function.
        case "driver":
            return firstName + ' drives fro Uber';
        case "designer":
            return firstName + ' designs websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
*/
/*Differences between statements and expressions

expressions: pieces of code that always produce a value, no matter how the code is.

statements/declarations: they do just perform actions, but dont produce immediate results
*/

/*----------
Arrays
----------
arrays are collections of variables that can even have different data types.

Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
arrays are 0-based, so the first element is index 0, the second one is index 1, etc.

console.log(names[0]);
console.log(names.length);

mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

Different data types

var John = ['John', 'Smith', 1990, 'teacher', false];
John.push('blue');
John.unshift('Mr.');
console.log(John);

John.pop();
John.pop();
John.shift();
console.log(John);

console.log(John.indexOf(1990));

var isDesigner = John.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/*---------
CODING CHALLENGE 2
----------

var bill = [124,48, 268];
var tip = [];
var total = [];

function tipCalc(bill) {
    if (bill < 50) {
        tip.push(bill * (20/100));
        total.push(bill + (bill * (20/100)));
        console.log(bill * (20/100));
        console.log(bill + (bill * (20/100)));
    } else if (bill < 200 && bill >= 50) {
        tip.push(bill * (15/100));
        total.push(bill + (bill * (15/100)));
        console.log(bill * (15/100));
        console.log(bill + (bill * (15/100)));
    } else {
        tip.push(bill * (10/100));
        total.push(bill + (bill * (10/100)));
        console.log(bill * (10/100));
        console.log(bill + (bill * (10/100)));
    }
}
tipCalc(bill[0]);
tipCalc(bill[1]);
tipCalc(bill[2]);

console.log(tip, total);
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/*------------
Objects and Properties
------------

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*----------
Objects and Methods
----------

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        //return 2018 - this.birthYear;
        this.age = 2018 - this.birthYear;
    }
};


var age = console.log(john.calcAge());
john.age = age;

john.age = john.calcAge();

john.calcAge();
console.log(john);*/

/*---------------
CODING CHALLENGE 4
---------------

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 85,
    height: 1.9,
    calcBMI: function(mass,height) {
        return this.mass / (this.height * this.height);
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Wahlberg',
    mass: 90,
    height: 1.85,
    calcBMI: function(mass,height) {
        return this.mass / (this.height * this.height);
    }
}

john.BMI = john.calcBMI(john.mass,john.height);
mark.BMI = mark.calcBMI(mark.mass,mark.height);
var message = 'Does John have a higher BMI than Mark? ';
message += john.BMI > mark.BMI;
message += 'John\s BMI is ' + john.BMI + ' and Mark\s BMI is ' + mark.BMI + ' .';
console.log(message);*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 85,
    height: 1.9,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Wahlberg',
    mass: 90,
    height: 1.85,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.mbi) {
    console.log(john.firstName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log(john.firstName + ' and ' + mark.firstName + ' have the same BMI.');
}
*/

/*---------------
Loops and iteration
---------------*/


// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// i = 0, 0 < true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for loop
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

white loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];


for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/

//looping backwards
/*
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

//coding challenge 5
var johnBills = {
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;    
        }
    }
};

var markBills = {
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 50 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;    
        }
    }
};

johnBills.calcTips();
markBills.calcTips();
console.log(johnBills.tips, markBills.tips);


var johnAvg = 0;
var markAvg = 0;

function arrayAvg(arr) {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

johnBills.average = arrayAvg(johnBills.tips);
markBills.average = arrayAvg(markBills.tips);
console.log(johnBills.average, markBills.average);

var message = "";

if (johnBills.average > markBills.average) {
    message += "John tips more than Mark.";
} else if (johnBills.average < markBills.average) {
    message += "Mark tips more than John.";
} else {
    message += "John and Mark tip the same."
}

console.log(message);
