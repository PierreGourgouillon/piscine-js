
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
        console.log(funct([key, obj[key]],index),obj[key])
        
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

