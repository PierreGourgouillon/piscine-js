
function filterEntries(obj,funct){
    let obj1 = {}
    let entries = []
    let valueObject = Object.keys(obj)
    
    valueObject.forEach((element,index)=>{
        
        let bool = funct([element,obj[element]],index,valueObject)
        console.log (obj[element])

        if(bool){
            entries.push([element,obj[element]])         
        }

    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

