-- Daily Challenge : SQL Puzzle
-- In this puzzle you have to go through all the SQL queries and provide us the output of the requests before executing them 
-- (ie. make an assumption). Then, execute them to make sure you were correct.
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab
--  id | name
-- ----------
--  5  | Pawan
--  6  | Sharlee
--  7  | Krish
-- NULL| Avtaar

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab
--  id |
-- -----
--  5  |
-- NULL|

-- Q1. What will be the OUTPUT of the following statement?
  	SELECT COUNT(*)
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- 0, becouse not in doesn't work with NULL.

-- Q2. What will be the OUTPUT of the following statement?
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
-- 2, COUNT function ignored the NULL values.

-- Q3. What will be the OUTPUT of the following statement?
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- 0

-- 	Q4. What will be the OUTPUT of the following statement?
	SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
-- 	2
