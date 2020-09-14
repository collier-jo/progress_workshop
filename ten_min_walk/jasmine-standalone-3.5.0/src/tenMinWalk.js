class WalkingGenerator {

    tenMinWalk(array){
        if(array.length === 10){

            //iterate over the array 

            var x = 0
            var y = 0 

            array.forEach(direction => {
                if(direction === "n"){
                    y += 1
                } else if(direction === "s"){
                    y -= 1
                } else if(direction === "e"){
                    x -=1
                } else {
                    x += 1
                }
            })

            if( x === 0 && y === 0){
                return true
            } else {
                return false
            }
            
        } else {
            return false
        }
    }
}

// array1.forEach(element => console.log(element));