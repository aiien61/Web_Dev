CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);

-- One to One --
CREATE TABLE contact_detail (
  id INTEGER REFERENCES student(id) UNIQUE,
  tel TEXT,
  address TEXT
);

-- Insert Data
INSERT INTO student (first_name, last_name)
VALUES ('Angela', 'Yu');
INSERT INTO contact_detail (id, tel, address)
VALUES (1, '+123456789', '123 App Brewery Road');


-- Join
SELECT *
FROM student AS s
JOIN contact_detail AS c
ON s.id = c.id;

-- Many to One --
CREATE TABLE homework_submission(
	id SERIAL PRIMARY KEY,
	mark INTEGER,
	student_id INTEGER REFERENCES student(id)
);

-- Insert Data --
INSERT INTO homework_submission (mark, student_id)
VALUES (98, 1), (87, 1), (88, 1);

-- Join
SELECT *
FROM student as s
JOIN homework_submission as h
ON s.id = h.student_id;

-- Join
SELECT s.id AS student_id, first_name, last_name, mark
FROM student AS s
JOIN homework_submission as h
ON s.id = student_id;

-- Many to Many
CREATE TABLE class(
	id SERIAL PRIMARY KEY,
	title VARCHAR(45)
);

CREATE TABLE enrollment(
	student_id INTEGER REFERENCES student(id),
	class_id INTEGER REFERENCES class(id),
	PRIMARY KEY (student_id, class_id)
);

-- Insert Data --
INSERT INTO student (first_name, last_name)
VALUES ('Jack', 'Bauer');

INSERT INTO class (title)
VALUES ('English Literature'), ('Maths'), ('Physics');

INSERT INTO enrollment (student_id, class_id ) VALUES (1, 1), (1, 2);
INSERT INTO enrollment (student_id ,class_id) VALUES (2, 2), (2, 3);

SELECT *
FROM enrollment as e
JOIN student AS s ON s.id = e.student_id
JOIN class AS c ON c.id = e.class_id;
