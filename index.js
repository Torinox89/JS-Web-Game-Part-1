
function newImage(url, left, bottom){

let character = document.createElement('img')
character.src = url
character.style.position = 'fixed'
character.style.left = left + 'px'
character.style.bottom = bottom + 'px'
document.body.append(character)

return character
}

function newImage(url, left, bottom){
  let character =  newImage(url, left, bottom)
  
  object.addEventListener('dblclick', () => {
    object.remove()
})

}

newImage('assets/green-character.gif', 100, 100)


