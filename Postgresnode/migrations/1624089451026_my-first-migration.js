/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE STUDENTS (
        registration_number varchar(15) PRIMARY KEY ,
        name varchar(50)
    ) ;
    `);
};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE STUDENTS
    `)
};
