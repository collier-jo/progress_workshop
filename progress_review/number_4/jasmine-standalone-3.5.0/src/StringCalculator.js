class StringCalculator {

    calculate(string){

        var equationArray = string.split(" ")
        // ["2" "+" "2"]
        // 1st and last in array = numbers 

        var firstNumber = Number(equationArray[0]) // 2 
        var secondNumber = Number(equationArray[2]) // 2

        if(equationArray[1] === "+"){
            let equals = firstNumber + secondNumber
            return [string, equals]
        }


        // return [string, 2]
    }
}