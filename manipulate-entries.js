
function filterEntries(obj,funct){
    let obj1 = {}
    let entries = []
    let valueObject = Object.keys(obj)
    console.log("helloooo", valueObject)
    valueObject.forEach((element,index)=>{
        let bool = funct(obj[element],index)
        

        if(bool){
            entries.push([element,obj[element]])         
        }
    })
    obj1 = Object.fromEntries(entries)
    return obj1
}

