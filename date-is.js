
function isValid(date){
    if (!isNaN(date)){
        let a =  new Date(date)
        return a.toString() !== "Invalid Date";
    }
    return false
}

function isAfter(date1,date2){
    if (isNaN(date)){
        let a =  new Date(date)
        return a.toString() !== "Invalid Date";
    }
    return false
}