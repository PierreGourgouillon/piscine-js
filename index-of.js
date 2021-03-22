function indexOf(array,valueInArray,number){
    let compteur = 0

    for(let i=0;i<=array.length-1;i++){

        if (valueInArray==array[i]&&number==undefined){
            return i
        }

        if (valueInArray==array[i]){
            compteur +=1
        }

        if (compteur==number && number != 0){
            return i
        }
       
    }

    if (compteur == 0){
        return -1
    }

    return compteur
}

function lastIndexOf(array,valueInArray,number){
    let compteur = 0

    for(let i = array.length-1;i>=0;i--){
        if (valueInArray==array[i] && number==undefined){
            return i
        }

        if (valueInArray==array[i]){
            compteur +=1
        }

        if (compteur==number){
            return i
        }
    }

    if (compteur==0){
        return -1
    }
    
    return compteur
}

function includes(array, number){
    for(let i=0;i<array.length;i++){
        if (number==array[i]){
            return true
        }
    }

    return false
}