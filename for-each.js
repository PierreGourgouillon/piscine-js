function forEach(array,funct){
    for (let i=0;i <array.length;i++){
        funct(array[i],i,array)
    }
}