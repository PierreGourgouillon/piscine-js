function filterShortStateName(arrayString){
    const tableau = arrayString.filter((element)=>{
        return element.length < 7
    })
    return tableau
}

function filterStartVowel(arrayString){
    const tableau = arrayString.filter((element)=>{
        if(element[0].toLowerCase() == "a"|| element[0].toLowerCase() == "e"||element[0].toLowerCase() == "i"||element[0].toLowerCase() == "o"||element[0].toLowerCase() == "u"){
            return element
        }
    })
    console.log(tableau)
    return tableau
}

function filter5Vowels(arrayString){
    const tableau = arrayString.filter((element)=>{
        let compteur = 0
        for (let ch of element.toLowerCase()){
            if (ch == "a" || ch == "e"||ch == "i" ||ch == "o" ||ch == "u"){
                compteur++
            }

            if (compteur >=5){
                return element
            }
        }
    })
    return tableau
}

function filter1DistinctVowel(arrayString){

    const tableau = arrayString.filter((element) =>{
        let compteurVoyelle = 0
        let b = element.toLowerCase()

        if (b.includes("a")){
            compteurVoyelle++
        }

        if (b.includes("e")){
            compteurVoyelle++
        }

        if (b.includes("i")){
            compteurVoyelle++
        }

        if (b.includes("o")){
            compteurVoyelle++
        }

        if (b.includes("u")){
            compteurVoyelle++
        }

        if (compteurVoyelle == 1){
            return element
        }
    })
    console.log(tableau)
    return tableau
}

filter1DistinctVowel([
    'Alabama', 'Alaska',
    'Arizona', 'Arkansas',
    'Idaho',   'Illinois',
    'Indiana', 'Iowa',
    'Ohio',    'Oklahoma',
    'Oregon',  'Utah'
  ])

function multiFilter(arrayString){
    const tableau = arrayString.filter((element) =>{
        if (element.capital.length>=8){
            return element
        }else if (element.name[0].toLowerCase() != "a" && element.name[0].toLowerCase() != "e" && element.name[0].toLowerCase() != "i" && element.name[0].toLowerCase() != "o" && element.name[0].toLowerCase() != "u"){
            return element
        }else if (element.tag.includes("a") || element.tag.includes("e") ||element.tag.includes("i") ||element.tag.includes("o") ||element.tag.includes("u")){
            return element
        }else if (element.region !=  "South"){
            return element
        }
    })
    console.log(tableau)
    return tableau 
}
