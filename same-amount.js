
function sameAmount(str,reg1,reg2){
    let arr1 = str.match(reg1.global) ?? []
    let arr2 = str.match(reg2.global) ?? []

    console.log(arr1,arr2)
    console.log(str)

    if (arr1.length == arr2.length){
        return true
    }

    return false
}