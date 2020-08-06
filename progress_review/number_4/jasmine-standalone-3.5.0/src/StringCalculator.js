class StringCalculator {

    calculate(string){

        var sumArray = string.split(" ")
        var sum = 0

        for(var i = 0; i <= sumArray.length - 1; i ++){
            var singleItem = sumArray[i]
            if(!(singleItem === "+")){
                var convertedNumber = Number(singleItem)
                sum += convertedNumber
            } 
        }

        return [string, sum]
    }
}