
function matchCron(cron,date){
    let minutes = date.getMinutes()
    let hour = date.getHours()
    let day = date.getDate()
    let month = date.getMonth() +1
    let dayWeek = date.getDay()
    let arrayCron = cron.split(" ")
    let compteur = 0
    let compt2 = 0

    for (let i = 0; i <= 4;i++){
        if (!arrayCron[i].includes("*")){
            compteur++
        }
    }

    for (let i =0;i<arrayCron.length;i++){
        if (arrayCron[i].includes("*") === false){
            if (arrayCron[i] == minutes){
                compt2++
                continue
            }

            if (arrayCron[i] == hour){
                compt2++
                continue
            }

            if (arrayCron[i] == day){
                compt2++
                continue
            }

            if (arrayCron[i] == month){
                compt2++
                continue
            }

            if (arrayCron[i] == dayWeek){
                compt2++
                continue
            }
        }
    }

    if (compt2 === compteur){
        return true
    }

    return false
}
console.log(matchCron('* * * * 1',new Date('2020-06-01 00:00:00')))