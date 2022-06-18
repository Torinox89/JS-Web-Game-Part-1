




function newImage(url, left, bottom){
    let character = document.createElement('img')
    character.src = url
    character.style.position = 'fixed'
    character.style.left = left + 'px'
    character.style.bottom = bottom + 'px'
    document.body.append(character)
    return character
}

function newItem(url, left, bottom){
    let character = newImage(url, left, bottom)

    character.addEventListener('dblclick', () => {
        character.remove()
    })
}


newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


newItem('assets/sword.png', 500, 405)

newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

