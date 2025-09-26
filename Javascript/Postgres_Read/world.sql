-- Create a table that stores a series of countries and their capital cities
CREATE TABLE capitals (
	id SERIAL PRIMARY KEY,
	country VARCHAR(45),
	capital VARCHAR(45)
);

-- Create a table that stores a series of countries and the emoji image of their national flags
CREATE TABLE flags (
	id SERIAL PRIMARY KEY,
	name VARCHAR(45),
	flag TEXT
);

-- Create a table that stores a series of countries and their rice production and wheat production
CREATE TABLE world_food (
	id SERIAL PRIMARY KEY,
	country VARCHAR(45),
	rice_production FLOAT,
	wheat_production FLOAT
);

SELECT country FROM world_food;

SELECT country, wheat_production FROM world_food;

-- Find the rice production of the USA
SELECT rice_production 
FROM world_food
WHERE country='United States';

-- Find all the countries that have wheat production greater than 20
SELECT country
FROM world_food
WHERE wheat_production>20;

-- Find all the countries that have 'U' as the beginning letter in their country name
SELECT country
FROM world_food
WHERE country LIKE 'U' || '%';

-- Find all the countries that have 'a' as the ending letter in their country name
SELECT country
FROM world_food
WHERE country LIKE '%' || 'a';

-- Create a table that records a series of visited countries
CREATE TABLE visited_countries(
	id SERIAL PRIMARY KEY,
	country_code CHAR(2) NOT NULL UNIQUE
);

-- Insert a new record to world_food table
INSERT INTO world_food (country, rice_production, wheat_production)
VALUES ('Italy', 1.46, 7.3);

-- Create a table that stores countries and their codes
CREATE TABLE countries(
	id SERIAL PRIMARY KEY,
	country_code CHAR(2),
	country_name VARCHAR(100)
);

-- Delete tables for a new version
DROP TABLE IF EXISTS visited_countries, users;

-- Create users and visited countries tables that can identify different users' visits
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(15) UNIQUE NOT NULL,
	color VARCHAR(15)
);

CREATE TABLE visited_countries(
	id SERIAL PRIMARY KEY,
	country_code CHAR(2) NOT NULL,
	user_id INTEGER REFERENCES users(id)
);

-- Insert Data
INSERT INTO users (name, color)
VALUES ('Amy', 'teal'), ('Jack', 'powderblue');

INSERT INTO visited_countries (country_code, user_id)
VALUES ('FR', 1), ('GB', 1), ('CA', 2), ('FR', 2 );

-- Alter Table Schema
ALTER TABLE visited_countries
	ADD UNIQUE(user_id, country_code);
	
-- Update Data
UPDATE users
SET name = 'Angelina'
WHERE id = 1;

-- Delete Data
DELETE FROM visited_countries
WHERE country_code = 'JP' AND user_id = 1;

DELETE FROM visited_countries
WHERE user_id IS NULL;

SELECT * FROM visited_countries
ORDER BY id ASC;	
