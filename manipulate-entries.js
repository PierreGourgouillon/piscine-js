
function filterEntries(obj,funct){
    console.log(`hello ${obj}duisqhuidh${funct}`)
    let obj1 = {}
    let entries = []
    let valueObject = Object.keys(obj)

    valueObject.forEach((element,index)=>{
        let bool = funct(obj[element],index)
        let boole = funct(element,index)

        if(bool || boole){
            entries.push([element,obj[element]])         
        }
    })
    obj1 = Object.fromEntries(entries)
}
