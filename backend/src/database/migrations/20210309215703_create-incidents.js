exports.up = function(knex) {  // <- Método "up" responsável pela criação da tabela
  return knex.schema.createTable('incidents', function (table){
    table.increments();

    table.string ('title').notNullable();
    table.string ('description').notNullable();
    table.decimal ('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');

  });
};

exports.down = function(knex) {  // <- Méntodo down responsável por desfazer coisas na tabela
  return knex.schema.dropTable('incidents');
  
};