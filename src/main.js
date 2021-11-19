import Animales from './Animales.js'
// import { mysql as options } from './options.js'
import { sqlite3 as options } from './options.js'

const arrayAnimales = [
  { tipo: 'Perro', nombre: 'Firulais', edad: 5 },
  { tipo: 'Gato', nombre: 'Michi', edad: 3 },
  { tipo: 'Loro', nombre: 'Pedro', edad: 8 },
  { tipo: 'Caballo', nombre: 'Flecha Negra', edad: 9 },
]

const animales = new Animales(options)
animales.crearTabla()
  .then(() => console.log('Tabla Animales creada con éxito'))

  .then(() => {
    return animales.insertar(arrayAnimales)
  })

  //-------------2 Listar-------------------
  // .then(() => {
  //   return animales.listar()
  // })
  // .then(listado => {
  //   console.table(listado)
  // })


  //-------------3 Listar por nombre-------------------
  // .then(() => {
  //   return animales.listarPorNombres()
  // })
  // .then(listado => {
  //   console.table(listado)
  // })

  //-------------4 Listar menores a -------------------
  // .then(() => {
  //   return animales.listarMenorEdad('7')
  // })
  // .then(listado => {
  //   console.table(listado)
  // })

  //-------------5 Listar ordenados -------------------
  // .then(() => {
  //   return animales.listarOrdenadosPorEdad('asc')
  // })
  // .then(listado => {
  //   console.table(listado)
  // })

  //-------------6 Delete por id -------------------
  // .then(() => {
  //   return animales.borrar(2)
  // })
  // .then(() => {
  //   return animales.listar()
  // })
  // .then(listado => {
  //   console.table(listado)
  // })

  //-------------7 Actualizar por nombre -------------------
  // .then(() => {
  //   return animales.actualizar('Firulais', 'Boby')
  // })
  // .then(() => {
  //   return animales.listar()
  // })
  // .then(listado => {
  //   console.table(listado)
  // })

  //-------------8 Actualizar por edad mayores a -------------------
  .then(() => {
    return animales.actualizarMayoresA('7', 'Viejitos')
  })
  .then(() => {
    return animales.listar()
  })
  .then(listado => {
    console.table(listado)
  })


  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    animales.cerrarBD()
  })