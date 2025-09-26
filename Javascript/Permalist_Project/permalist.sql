CREATE TABLE items(
	id SERIAL PRIMARY KEY,
	title VARCHAR(100)
);

ALTER TABLE items
	ALTER COLUMN title SET NOT NULL; 
	
INSERT INTO items (title)
VALUES ('Buy milk'), ('Finish homework');

