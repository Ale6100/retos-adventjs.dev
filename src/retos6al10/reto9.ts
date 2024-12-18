`
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
Ejemplo:

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
`

type Space = '·' | '@' | '*' | 'o'
type Board = string[] // En el enunciado original el tipado especificaba type Board = Space[], pero es un error
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  const filaLocomotora = board.findIndex(b => b.includes('@'))
  const columnaLocomotora = board[filaLocomotora].indexOf('@')

  let posFinal = '';

  if (mov === 'U') {
    posFinal = board[filaLocomotora-1]?.[columnaLocomotora]
  } else if (mov === 'R') {
    posFinal = board[filaLocomotora]?.[columnaLocomotora+1]
  } else if (mov === 'D') {
    posFinal = board[filaLocomotora+1]?.[columnaLocomotora]
  } else {
    posFinal = board[filaLocomotora]?.[columnaLocomotora-1]
  }

  let res: Result;
  if (posFinal === undefined || posFinal === 'o') {
    res = 'crash';
  } else if (posFinal === '*') {
    res = 'eat';
  } else {
    res = 'none';
  }

  return res;
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log('Reto 9:')

console.log(moveTrain(board, 'U'))
console.log(moveTrain(board, 'D'))
console.log(moveTrain(board, 'L'))
console.log(moveTrain(board, 'R'), '\n')
