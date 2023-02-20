-- Create a table city_info, with those columns : event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust

CREATE TABLE city_info (
event_datetime timestamp NOT NULL, 
city VARCHAR(50) NOT NULL, 
temperature decimal NOT NULL, 
light decimal NOT NULL, 
airquality_raw decimal NOT NULL, 
sound decimal NOT NULL, 
humidity decimal NOT NULL, 
dust decimal NOT NULL
)
-- echo$TMPDIR
-- 3. Import the csv file into the table
COPY city_info (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
FROM '/Users/anastasiiashlonimsky/Downloads/city_info.csv'
DELIMITER ',' CSV HEADER;

SELECT*FROM city_info 
-- Total rows: 1000 of 4711

-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
SELECT * FROM city_info WHERE city='Boston' AND event_datetime='2015-03-01 11:00:00'
-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ?
SELECT * FROM city_info WHERE temperature >=28 AND temperature <=30 AND city = 'San Francisco'
-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
Select city, event_datetime AS day,sound FROM city_info ORDER BY sound DESC LIMIT 1;
-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
SELECT city, event_datetime AS day,sound FROM city_info ORDER BY sound ASC LIMIT 1;
-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
SELECT dust,event_datetime FROM city_info WHERE event_datetime='2015-03-26 20:00' AND city = 'San Francisco';

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
SELECT EXTRACT(DAY FROM event_datetime) AS Day, EXTRACT(HOUR FROM event_datetime) AS Hour FROM city_info WHERE city='Geneva' AND humidity <=40 OR humidity >=60 ;

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
SELECT to_char(event_datetime, 'Day') AS Day, light FROM city_info ORDER BY light DESC limit 1;

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.
SELECT DISTINCT city FROM city_info WHERE city ILIKE 's%';
-- 10. Add to the table, todays information in Israel - of this very hour. 
INSERT INTO city_info (event_datetime, city, temperature, light,airquality_raw, sound, humidity, dust)
VALUES (NOW(), 'Tel-Aviv', 18, 3500, 19, 1700, 59, 1000);
SELECT*FROM city_info WHERE city='Tel-Aviv'


-- Week6 Day2 Exercise 1
SELECT*FROM city_info
-- Use aggregate functions
-- 1. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
SELECT AVG(dust) AS dust from city_info
Where DATE(event_datetime) BETWEEN '2015-03-01' AND '2015-03-05' AND city='Boston'
-- 2. How many rows does the table have about the city "San Francisco" ?
SELECT COUNT(*) FROM city_info
Where city='San Francisco'
-- 3. How many rows per city does the table have ?
select city, count(*) FROM city_info
GROUP BY city
-- 4. Where and when (only hour) it's the noisiest in the world?
SELECT city,event_datetime:: time AS  hour,sound FROM city_info
WHERE sound = (SELECT max(sound) FROM city_info)