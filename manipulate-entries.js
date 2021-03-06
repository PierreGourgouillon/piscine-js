
function filterEntries(obj,funct){
    let obj1 = {}
    let entries = []
    let valueObject = Object.keys(obj)
    
    valueObject.forEach((element,index)=>{
        
        let bool = funct([element,obj[element]],index,valueObject)

        if(bool){
            entries.push([element,obj[element]])         
        }

    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function mapEntries(obj,funct){
    let obj1 = {}
    let entries = []
    let keyObject = Object.keys(obj)

    keyObject.forEach((key,index)=>{
        let result = funct([key, obj[key]],index,keyObject)
        entries.push(result)
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

function reduceEntries(obj,funct,kc){

    if (kc == undefined){
        kc = ""
    }
    
    let keyObject = Object.entries(obj)
    let number

    if (typeof kc == "string" || kc == null){

        number = keyObject.reduce(funct,kc)
        let bd  = ""
        for (let i = 0;i < number.length;i++){
            if (i > number.indexOf(keyObject[0]) + keyObject[0].length -2){
                bd += number[i]
            }
        }

        if (kc == null){
            return  keyObject[0] + bd
        }

        return bd
    }else{
        number = keyObject.reduce(funct,kc)
    }
    
    return number
}

function totalCalories(obj){
    let result = 0
    let arrayKey = Object.keys(obj)

    arrayKey.forEach((element)=>{
        result += obj[element] * nutritionDB[element].calories/100
    })

    return Math.round(result * 100) / 100
}

function lowCarbs(obj){
    let obj1
    let array = []
    let arrayKey = Object.keys(obj)
    arrayKey.forEach((element)=>{

        let resultCarbs = obj[element] * nutritionDB[element].carbs/100
        if (resultCarbs < 50){
            array.push([element,obj[element]])
        }
    })
    obj1 = Object.fromEntries(array)

    return obj1
}

function cartTotal(obj){
    let obj1 = {}
    let arrayKeys = Object.keys(obj)
    let array = []
    arrayKeys.forEach((element)=>{
        let obj2  = {}
        let fd = element
        obj2.calories = Math.round((obj[element] * nutritionDB[element].calories/100) * 1000)/1000
        obj2.carbs = Math.round((obj[element] * nutritionDB[element].carbs/100) * 1000)/1000
        obj2.fat = Math.round((obj[element] * nutritionDB[element].fat/100) * 1000)/1000
        obj2.fiber = Math.round((obj[element] * nutritionDB[element].fiber/100) * 1000)/1000
        obj2.protein = Math.round((obj[element] * nutritionDB[element].protein/100) * 1000)/1000
        obj2.sugar = Math.round((obj[element] * nutritionDB[element].sugar/100) * 1000)/1000
        obj1[element] = obj2
    })
    console.log(obj1)

    return obj1
}

