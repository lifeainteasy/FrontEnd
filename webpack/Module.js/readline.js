const readline = require("readline");
const { logFigureError, logInput, logResult } = require("./log");
const { getCircleArea, getSquareArea } = require("./mathUtil");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('넓이를 구하고자 하는 도형의 종류를 입력해 주세요: ', figure =>{
    switch(figure){
        case "원":
            rl.question("변의 길이를 입력해주세요 : ",
            input =>{
                console.log(logInput)
                console.log(logResult(figure, getSquareArea(input)));
                rl.close();
            });
            break;
        case "정사각형":
            rl.question("변의 길이를 입력해주세요 : ",
            input =>{
                console.log(logInput(input));
                console.log(logResult(figure,getCircleArea(input)));
                rl.close();

            });
            break;
        default:
            console.log(logFigureError)
            rl.close();

    }
})