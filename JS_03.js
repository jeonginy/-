const calculator = {
    plus: function(a, b){
        // alert(a + b);
        // Get the value, out of the function then can be able to use or change with the value
        return a + b;
    },
    divide: function(a, b){
        return a / b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    power: function(a, b){
        return a ** b;
    },
};
//  페이지 콘솔 창에 변수 이름을 치면 값이 나옴 
const plusResult = calculator.plus(4, 6);
const minusResult = calculator.minus(plusResult, 2);
const divideResult = calculator.divide(2, minusResult);
const powerResult = calculator.power(divideResult, minusResult);


// Return values
// const age = 26;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);
