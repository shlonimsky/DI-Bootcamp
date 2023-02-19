CREATE TABLE students(
	student_id SERIAL PRIMARY KEY,
	last_name VARCHAR(100) NOT NULL,
	first_name VARCHAR (50) NOT NULL,
	birth_date DATE NOT NULL
)
INSERT INTO students (last_name,first_name,birth_date)
VALUES 
	('Benichou','Marc','11/02/1998'),
	('Cohen','Yoan','12/03/2010'),
	('Benichou','Lea','07/27/1987'),
	('Dux','Amelia','04/07/1996'),
	('Grez','David','06/14/2003'),
	('Simpson','Omer','10/03/1980');
-- 	SELECT TO_CHAR(birth_date, 'dd/mm/yyyy') FROM students

-- Fetch all of the data from the table.
SELECT * FROM students
-- Fetch all of the students first_names and last_names.
SELECT first_name Name,last_name Sername FROM students;
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
SELECT first_name Name,last_name Sername FROM students WHERE student_id=2;
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name Name,last_name Sername FROM students WHERE last_name='Benichou' AND first_name='Marc';
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name Name,last_name Sername FROM students WHERE last_name='Benichou' OR first_name='Marc';
-- Fetch the students whose first_names contain the letter a.
SELECT first_name Name,last_name Sername FROM students WHERE first_name ILIKE '%a%';
-- Fetch the students whose first_names start with the letter a.
SELECT first_name Name,last_name Sername FROM students WHERE first_name ILIKE 'a%';
-- Fetch the students whose first_names end with the letter a.
SELECT first_name Name,last_name Sername FROM students WHERE first_name ILIKE '%a';
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name Name,last_name Sername FROM students WHERE first_name ILIKE '_%a%' AND NOT first_name ILIKE 'a%';
-- Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name Name,last_name Sername FROM students WHERE student_id=1 OR student_id=3;
-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT first_name Name,last_name Sername,birth_date FROM students WHERE birth_date>='2000-01-01';
