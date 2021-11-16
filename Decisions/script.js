var applyForDrivingLicense, waitForSomeTime;
var birthYear=1999;
var currentyear=2020;
var age= currentyear-birthYear;
console.log(age);
if(age>18){
    console.log(`you have crossed 18 years ${age} apply for the driving license `);
}
else{
    console.log(`you have not crossed the minimum age of 18 years ${age} wait untill you cross your age`);
}