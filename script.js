'use strict'

var firstNumber, secondNumber;

var numbers = {
    firstNumber: undefined,
    secondNumber: undefined,
}

var numberMeans = {
    numbers: numbers,
    arithmeticMean: undefined,
    geometricMean: undefined,
    harmonicMean: undefined,
}

firstNumber = Number(prompt("Wprowadź pierwszą liczbę: "));
secondNumber = Number(prompt("Wprowadź drugą liczbę: "));

console.log("Wprowadzone liczby to " + firstNumber + " i " + secondNumber + ".")

numbers.firstNumber = firstNumber;
numbers.secondNumber = secondNumber;

firstNumber = null; secondNumber = null;

numberMeans.arithmeticMean = (numbers.firstNumber + numbers.secondNumber)/2;
console.log("Średnia arytmetyczna wynosi: ", numberMeans.arithmeticMean);

numberMeans.geometricMean = firstNumber*secondNumber;
console.log("Średnia geometryczna wynosi (''błędna''): ", numberMeans.geometricMean);

numberMeans.harmonicMean = (2*numbers.firstNumber*numbers.secondNumber)/(numbers.firstNumber + numbers.secondNumber);
console.log("Średnia harmoniczna wynosi: ", numberMeans.harmonicMean);