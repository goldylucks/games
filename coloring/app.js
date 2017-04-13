const ROWS = 100
const COLUMNS = 100
const TILE_LENGTH = 10
let chosenColor = 'black'
init()

document.addEventListener('click', onClick)
document.addEventListener('onMouseMove', onMouseMove)

function init () {
  createGrid(ROWS, COLUMNS)
  el('active-color').style.backgroundColor = chosenColor
  // if logged in, load saved drawing from server
  // maybe load last drawing from LS?
  // or prompt user to load one from LS if exists? (can also sort them by date maybe)
}

function createGrid (rows, columns) {
  const targetNode = el('surface')
  targetNode.style.width = (ROWS * TILE_LENGTH) + 'px'
  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    for (let columnIdx = 0; columnIdx < columns; columnIdx++) {
      const tileNode = document.createElement('div')
      tileNode.id = 'tile' + rowIdx + columnIdx
      tileNode.className = 'tile'
      tileNode.style.width = TILE_LENGTH + 'px'
      tileNode.style.height = TILE_LENGTH + 'px'
      targetNode.appendChild(tileNode)
    }
  }
}

function onClick (evt) {
  const { id, className } = evt.srcElement

  if (className.includes('tile')) {
    return colorTile(id)
    
  }

  if (id === 'color') {
    return el(id).classList.toggle('open')
    
  }

  if (className.includes('color-picker-color')) {
    return setChosenColor(evt.srcElement.style.backgroundColor)
    
  }

  if (id === 'active-color') {
    return el('color').classList.add('open')
    
  }

  if (id === 'active-color') {
    return el('color').classList.add('open')
    
  }

  if (id === 'save') {
    return save()
    
  }

  if (id === 'load') {
    return load()
  }

}

function colorTile (id) {
  el(id).style.backgroundColor = chosenColor
}

function setChosenColor (color) {
  chosenColor = color
  el('active-color').style.backgroundColor = color
  el('color').classList.remove('open')
}

function onMouseMove (evt) {
  console.log('onMouseMove')
  // TODO
  // if click is not pressed, bail
  // color underlying tile with chosen color
}

function save () {
  const drawingName = prompt('What shall we name this masterpiece?')
  localStorage.setItem('drawing-' + drawingName, JSON.stringify({
    rows: ROWS,
    columns: COLUMNS,
    tiles: mapTiles()
  }))
  // TODO
  // if logged in, save to server
}

function load () {
  const saved = Object.keys(localStorage)
    .filter(key => key.indexOf('drawing-') === 0)
    .map(masterpiece => masterpiece.replace('drawing-', ''))
  const toLoad = prompt('which fince piece of art would you like to load?\n' + saved.join(', '))
  if (!toLoad) {
    return
  }
  if (!saved.includes(toLoad)) {
    alert(toLoad + ' is not in the list, please choose again!')
    return
  }
  console.log('do stuff with ' + toLoad)
}

function mapTiles () {
  return [].reduce.call(document.getElementsByClassName('tile'),
    function(tileColors, tile) { return tileColors.concat(tile.style.backgroundColor) }
  , [])
}

function el (id) {
  return document.getElementById(id)
}

// IDEAS
// ctrl + z for "undo"
// paint with keyboard
// save to LS after a few sec of inactivity