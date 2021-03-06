
function isValid(date){
    if (!isNaN(date)){
        let a =  new Date(date)
        return a.toString() !== "Invalid Date";
    }
    return false
}

function isAfter(date1,date2){
    if(date1 > date2){
        return true
    }
    return false
}

function isBefore(date1,date2){
    if(date1 < date2){
        return true
    }
    return false
}

function isFuture(date1){
    if (date1 > new Date()){
        return true
    }
    return false
}

function isPast(date1){
    if (typeof date1 == "object"){
        if (date1 < new Date()){
            return true
        }
    }
    return false
}