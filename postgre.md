1. command key to create database
  * CREATE DATABASE company (create)
  * \q (quit); \d (table)
  * psql company (connect database)

1. import data
  * Parse JSON to PostgreSQL using [OPENJSON](https://docs.microsoft.com/en-us/sql/relational-databases/json/convert-json-data-to-rows-and-columns-with-openjson-sql-server?view=sql-server-2017)
  * use sql file: `cat example.sql | psql company`
1. run query in sql shell
  * locate
  ``` JS
  SELECT
    *
  FROM
    company
  WHERE
    (state = 'CA')
  ```
 *  Year before/ after
 ``` JS
 SELECT
  *
 FROM
  company
 WHERE
  (year_founded >= 2000)
```
*


1.use Sqlite to test query in terminal. in the `.sql` root file. enter `pry` . `require sqlite3` 
