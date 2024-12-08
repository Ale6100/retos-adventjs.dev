`
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
`

type Shoe = {
  type: 'I' | 'R'
  size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
  const res: number[] = []
  const numerosITemp: number[] = [];
  const numerosRTemp: number[] = [];
  shoes.forEach(({ size, type }) => {
    if (type === 'I') {
      const indiceEnR = numerosRTemp.indexOf(size);
      if (indiceEnR !== -1) {
        numerosRTemp.splice(indiceEnR, 1)
        res.push(size)
      } else {
        numerosITemp.push(size)
      }
    } else {
      const indiceEnI = numerosITemp.indexOf(size);
      if (indiceEnI !== -1) {
        numerosITemp.splice(indiceEnI, 1)
        res.push(size)
      } else {
        numerosRTemp.push(size)
      }
    }
  })

  return res;
}

console.log('Reto 5:')

const shoes: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]
console.log(organizeShoes(shoes)) // [38, 42]

const shoes2: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
console.log(organizeShoes(shoes2)) // [38, 38]

const shoes3: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]
console.log(organizeShoes(shoes3), '\n') // []
