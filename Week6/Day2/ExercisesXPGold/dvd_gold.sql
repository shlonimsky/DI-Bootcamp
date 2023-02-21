-- Exercise 1: DVD Rental
-- Instructions
SELECT*FROM film
-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.
SELECT film.rating, COUNT(*) FROM film
GROUP BY film.rating
-- Get a list of all the movies that have a rating of G or PG-13.
-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price 
-- (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT rating, title FROM film
WHERE rating IN ('G','PG-13') AND rental_rate<3 AND LENGTH<120
ORDER BY title ASC
-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
UPDATE customer
SET first_name = 'Anastasiia',
    last_name = 'Shlonimsky',
	email = 'nastya@nastya.com'
WHERE customer_id=99;
-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
UPDATE ADDRESS
SET address = '36 Generala Pushkina',
    district = 'Shevchenko',
	postal_code = 49107,
	phone = '1122334455'
WHERE address_id=(
SELECT address_id FROM customer
WHERE customer_id=99)

SELECT*FROM ADDRESS
WHERE address_id=(
SELECT address_id FROM customer
WHERE customer_id=99)


-- Exercise 2: Students Table
-- Update
-- ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.
-- Change the last_name of David from ‘Grez’ to ‘Guez’.


-- Delete
-- Delete the student named ‘Lea Benichou’ from the table.


-- Count
-- Count how many students are in the table.
-- Count how many students were born after 1/01/2000.


-- Insert / Alter
-- Add a column to the student table called math_grade.
-- Add 80 to the student which id is 1.
-- Add 90 to the students which have ids of 2 or 4.
-- Add 40 to the student which id is 6.
-- Count how many students have a grade bigger than 83
-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.
-- Bonus: Count how many grades each student has.
-- Tip: You should display the first_name, last_name and the number of grades of each student. If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.
-- Tip : Use an alias called total_grade to fetch the grades.
-- Hint : Use GROUP BY.
-- SUM
-- Find the sum of all the students grades.