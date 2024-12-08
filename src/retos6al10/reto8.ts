`¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

indices: Un array de enteros que representan el progreso de cada reno en la pista:
0: El carril está vacío.
Número positivo: La posición actual del reno desde el inicio de la pista.
Número negativo: La posición actual del reno desde el final de la pista.
length: La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

Cada carril tiene exactamente length posiciones llenas de nieve (~).
Cada reno se representa con la letra r.
Los carriles están numerados al final con /1, /2, etc.
La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
Ejemplos:

drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/

`

function drawRace(indices: number[], length: number): string {
  const pista: string[] = [];
  const cantIndices = indices.length;

  indices.forEach((ind, i) => {
    const desplazamiento = ' '.repeat(cantIndices-i-1);
    const numero = ` /${i+1}`;
    const saltoDeLinea = i !== indices.length-1 ? '\n' : ''
    let contenido = '';
    if (ind === 0) {
      contenido = '~'.repeat(length);
    } else {
      const cantNieveIzquierda = ind > 0 ? ind : length+ind
      const nieveIzquierda = '~'.repeat(cantNieveIzquierda);
      const nieveDerecha = '~'.repeat(length-cantNieveIzquierda-1);
      contenido = `${nieveIzquierda}r${nieveDerecha}`
    }
    pista.push(`${desplazamiento}${contenido}${numero}${saltoDeLinea}`)
  })

  return pista.join('')
}

console.log('Reto 8:')

console.log(drawRace([0, 5, -3], 10))
console.log(drawRace([2, -1, 0, 5], 8))
console.log(drawRace([3, 7, -2], 12), '\n')
