const boton = document.getElementById("boton")
const body = document.querySelector("body")
let nomColor = document.getElementById("color")
let color 
let aleatorio
//obtener color
boton.addEventListener("click", () => {
  funcolor()
})

function funcolor() {
  aleatorio = Math.round(Math.random()*30)
 
  switch( aleatorio){
    case 1: 
    color = "blue"
    break 

    case 2: 
    color = "Salmon"
    break 

    case 3: 
    color = "red"
    break

    case 4: 
    color = "LightPink"
    break 

    case 5: 
    color = "DarkRed"
    break 

    case 6: 
     color = "MediumVioletRed"
    break 
    case 7: 
    color = "Orange"
    break 

    case 8: 
     color = "Yellow"
    break 

    case 9: 
     color = "MediumPurple"
    break 

    case 10: 
     color = "Violet"
    break 

    case 11: 
    color = "Gold"
    break 

    case 12: 
    color = "Moccasin"
    break 

    case 13: 
    color = "Lavender"
    break

    case 14: 
    color = "DarkViolet"
    break 

    case 15: 
    color = "Purple"
    break 

    case 16: 
     color = "GreenYellow"
    break 
    case 17: 
    color = "LimeGreen"
    break 

    case 18: 
     color = "Yellow"
    break 

    case 19: 
     color = "SpringGreen"
    break 

    case 20: 
     color = "DarkGreen"
    break 

    case 21: 
    color = "MediumAquamarine"
    break 

    case 22: 
    color = "DarkCyan"
    break 

    case 23: 
    color = "Lavender"
    break

    case 24: 
    color = "Cyan"
    break 

    case 25: 
    color = "Turquoise"
    break 

    case 26: 
     color = "SteelBlue"
    break 
    case 27: 
    color = "LightBlue"
    break 

    case 28: 
     color = "RoyalBlue"
    break 

    case 29: 
     color = "DeepSkyBlue"
    break 

    case 30: 
     color = "Navy"
    break 
    default: 
    break  
  }

  body.style.backgroundColor = color
  nomColor.innerHTML = color
}
