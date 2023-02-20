-- Exercise 1 : Bootcamp
-- Instructions
-- Continuation of the Exercise XP
-- Select
-- For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.
SELECT first_names,last_names,birth_dates FROM students
-- Fetch the first four students. You have to order the four students alphabetically by last_name.
SELECT first_name,last_name,birth_date FROM students
ORDER BY last_name ASC
LIMIT 4
-- Fetch the details of the youngest student.
SELECT first_name,last_name,AGE(birth_date) FROM students
WHERE AGE(birth_date)=(
SELECT MIN(AGE(birth_date)) FROM students)
-- Fetch three students skipping the first two students.
SELECT first_name,last_name,birth_date FROM students
OFFSET 2
LIMIT 3