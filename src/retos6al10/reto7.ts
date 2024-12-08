`
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
`

function fixPackages(packages: string): string {
  const girar = (str: string) => {
    return str.split('').toReversed().join('')
  }

  while (packages.includes('(') && packages.includes(')')) {
    const finCorte = packages.indexOf(')')
    const inicioCorte = packages.slice(0, finCorte).lastIndexOf('(');
    const inicio = packages.slice(0, inicioCorte)
    const giro = girar(packages.slice(inicioCorte+1, finCorte));
    const fin = packages.slice(finCorte+1)

    packages = inicio + giro + fin;
  }

  return packages;
}

console.log('Reto 7:')

console.log(fixPackages('a(cb)de')) // ➞ "abcde"
console.log(fixPackages('a(bc(def)g)h')) // ➞ "agdefcbh"
console.log(fixPackages('abc(def(gh)i)jk')) // ➞ "abcighfedjk"
console.log(fixPackages('a(b(c))e'), '\n') // ➞ "acbe"
