export function compose(){

    let body = document.querySelector("body")
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    document.addEventListener('keydown', (event) => {
        let arrayDiv = [...document.getElementsByClassName("note")]
        let isLowerCase = false

        for(let i = 0;i<alphabet.length;i++){
            if (alphabet[i] == event.key){
                isLowerCase = true
            }
        }

        if (event.key == "Backspace"){
            arrayDiv[arrayDiv.length-1].remove()
        }else if (event.key == "Escape"){
            for(let i=0;i<arrayDiv.length;i++){
                arrayDiv[i].remove()
            }
        }else if (isLowerCase) {
            let elementDiv = document.createElement("div")
            elementDiv.setAttribute("class","note")
            elementDiv.innerText = event.key
            let color = randomColor()
            elementDiv.style.backgroundColor = color
            body.append(elementDiv)
        }
    });
}

function randomColor() 
{
    var r = () => Math.floor(Math.random() * 256);
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}
