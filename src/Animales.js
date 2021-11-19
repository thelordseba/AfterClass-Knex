import knex from 'knex';

class Animales {
  constructor(config) {
    this.knex = knex(config);
  }

  crearTabla () {
    return this.knex.schema.dropTableIfExists('animales')
      .then(() => {
        return this.knex.schema.createTable('animales', table => {
          table.increments('id').primary();
          table.string('tipo', 25).notNullable();
          table.string('nombre', 25).notNullable();
          table.integer('edad');
        })
      })
  }

  cerrarBD () {
    return this.knex.destroy()
  }

  insertar (animales) {
    return this.knex('animales').insert(animales)
  }

  listar () {
    return this.knex('animales').select('*')
  }

  listarPorNombres () {
    return this.knex('animales').select('nombre', 'edad')
  }

  listarMenorEdad (value) {
    return this.knex('animales').select('*').where('edad', '<=', value)
  }

  listarOrdenadosPorEdad (value) {
    return this.knex('animales').select('nombre', 'edad').orderBy('edad', value)
  }

  borrar (id) {
    return this.knex('animales').where('id', id).del()
  }

  actualizar (nombre, nuevoNombre) {
    return this.knex('animales').where('nombre', nombre).update({ nombre: nuevoNombre })
  }

  actualizarMayoresA (edad, nuevoNombre) {
    return this.knex('animales').where('edad', '>', edad).update({ nombre: nuevoNombre })
  }
}

export default Animales;