-- 🌟 Exercise 1: DVD Rental
-- Get a list of all film languages.
select name from language
-- Get a list of all films joined with their languages – select the following details : film title, 
-- description, and language name. Try your query with different joins:
SELECT F.title, F.description, name AS language FROM film AS F
JOIN language AS L
ON L.language_id=F.language_id
-- Get all films, even if they don’t have languages.
SELECT F.title, F.description, name AS language FROM film AS F
LEFT JOIN language AS L
ON L.language_id=F.language_id
-- Get all languages, even if there are no films in those languages.
SELECT F.title, F.description, name AS language FROM film AS F
RIGHT JOIN language AS L
ON L.language_id=F.language_id
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
	film_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL
)
INSERT INTO NEW_FILM (title)
VALUES ('Batman'),
('Star Wars'),
('Ironman')
RETURNING *;
-- Create a new table called customer_review, which will contain film reviews that customers will make.
CREATE TABLE customer_review(
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INTEGER NOT NULL REFERENCES new_film (film_id) ON DELETE CASCADE ON UPDATE CASCADE,
	language_id INTEGER  NOT NULL REFERENCES language (language_id) ON DELETE CASCADE ON UPDATE CASCADE,
	title CHAR(50) NOT NULL,
	score SMALLINT  NOT NULL CHECK(SCORE BETWEEN 1 AND 10),
	review_text TEXT,
	last_update timestamp DEFAULT NOW()
)
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(film_id,language_id,title,score,review_text)
VALUES(
	(SELECT film_id FROM NEW_FILM WHERE title ILIKE 'star%'),
	(SELECT language_id FROM language WHERE name = 'English'),
	'Its good',
	10,
	'it was enteresting film, the actors are greate'
),
(
	(SELECT film_id FROM NEW_FILM WHERE title ILIKE 'batm%'),
	(SELECT language_ID FROM language WHERE name = 'Mandarin'),
	'not so bad',
	7,
	'nice'
)
SELECT* FROM customer_review
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film
WHERE title ILIKE 'batm%'
RETURNING *
SELECT * FROM NEW_FILM
SELECT * FROM customer_review
DELETE FROM new_film
WHERE title ILIKE 'batm%'



-- 🌟 Exercise 2 : DVD Rental
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE customer_review 
SET language_id = (SELECT language_id FROM language WHERE name ilike '%japan%' )
WHERE film_id=(SELECT film_id FROM NEW_FILM WHERE title ILIKE 'star%');

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we 
-- INSERT into the customer table? customer_address_id_fkey is the foregn key. In case inserting, the value should bbe taken
-- from other select to the id by its reference

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review
-- It doesn't need any checking, because any other objects doesn't depend on this table.

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT count(*) FROM rental
where return_date is null

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT f.title,f.replacement_cost AS price FROM rental AS r
JOIN inventory AS i ON i.inventory_id=r.inventory_id
join film AS f ON f.film_id=i.film_id
where return_date is null
ORDER BY price DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember 
-- their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title FROM film_actor AS fa
JOIN film AS f ON f.film_id=fa.film_id
WHERE
actor_id = (
			SELECT actor_id FROM actor
			WHERE first_name ILIKE '%Penelope%' AND last_name ILIKE '%Monroe%'
		   ) AND
fa.film_id IN (SELECT film_id FROM film
WHERE description ILIKE '%sumo%wrestler%');


-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT f.title FROM film_category AS fc
JOIN film AS f ON f.film_id=fc.film_id
WHERE
fc.category_id = (
			SELECT category_id FROM category
			WHERE name ILIKE '%documentary%'
		   ) AND
fc.film_id IN (SELECT film_id FROM film
WHERE length <=60 AND rating='R');


-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it 
-- between the 28th of July and the 1st of August, 2005.
SELECT f.title,r.return_date,p.amount FROM film AS f
JOIN inventory AS i ON f.film_id=i.film_id
JOIN rental AS r ON i.inventory_id=r.inventory_id
JOIN payment AS p ON r.rental_id=p.rental_id
WHERE r.customer_id=(SELECT customer_id FROM customer WHERE first_name='Matthew' AND last_name='Mahan')
AND p.amount>=4
AND DATE(r.return_date) > '2005-07-28' AND DATE(r.return_date)<'2005-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, 
-- and it looked like it was a very expensive DVD to replace.
SELECT f.title,f.description,f.replacement_cost FROM film AS f
JOIN inventory AS i ON f.film_id=i.film_id
JOIN rental AS r ON i.inventory_id=r.inventory_id
WHERE (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
AND  r.customer_id=(SELECT customer_id FROM customer WHERE first_name='Matthew' AND last_name='Mahan')
ORDER BY f.replacement_cost DESC
limit 1;
