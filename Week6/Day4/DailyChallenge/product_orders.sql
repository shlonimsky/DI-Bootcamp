-- Create a table called product_orders and 
-- a table called items.
-- You decide which fields should be in each table, although make sure the items table has a column called price.
-- There should be a one to many relationship between the product_orders table and the items table. An order can have many items, 
-- but an item can belong to only one order.
-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the product_orders table.
-- Create a function that returns the total price for a given order of a given user.
CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,	
	author VARCHAR(100) NOT NULL,
	price INTEGER CHECK(price>0) NOT NULL,
	order_id INTEGER REFERENCES product_orders (order_id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE product_orders (
	order_id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
	payment VARCHAR(20)DEFAULT 'credit card'
);
CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(100) NOT NULL
);
INSERT INTO users (user_name)
VALUES ('Joe Biden'),('Donald Trump'),('Barack Obama'),('George W. Bush'),('Bill Clinton')
RETURNING*;

INSERT INTO product_orders (user_id,payment)
VALUES  (
	(SELECT user_id FROM users WHERE user_name~~*'%biden%'),DEFAULT
),(
	(SELECT user_id FROM users WHERE user_name~~*'%Obama%'),DEFAULT
),(
	(SELECT user_id FROM users WHERE user_name~~*'%Trump%'),'Cash'
),(
	(SELECT user_id FROM users WHERE user_name~~*'%Bush%'),'Cash'
)
RETURNING*;


INSERT INTO items (title,author,price,order_id)
VALUES ('The Persistence of Memory','Salvador Dalí',1000000,1),
('The Scream','Edvard Munch',3000500,2),
('Mona Lisa','Leonardo da Vinci',5000000,2),
('Girl with a Pearl Earring','Johannes Vermeer',980000,3),
('The Kiss','Gustav Klimt',4500000,1),
('The Starry Night','Vincent van Gogh',2340500,4),
('Mars and Venus','Sandro Botticelli',5300000,3)
RETURNING*;

-- Create a function that returns the total price for a given order.
CREATE FUNCTION find_total_price(id INTEGER)
 RETURNS INTEGER 
 LANGUAGE plpgsql
 AS $total_price$
 declare
    total_price integer;
BEGIN
 SELECT SUM(PRICE) INTO total_price FROM items i
 JOIN product_orders o ON o.order_id=i.order_id
 WHERE i.order_id = id;
 RETURN total_price;
END;
$total_price$;

SELECT * FROM find_total_price(1);
SELECT * FROM find_total_price(2);
SELECT * FROM find_total_price(3);
SELECT * FROM find_total_price(4);



CREATE OR REPLACE FUNCTION find_total_price_byName(name VARCHAR(100))
 RETURNS INTEGER 
 LANGUAGE plpgsql
 AS $$
 declare
    total_price integer;
BEGIN
 SELECT SUM(PRICE) INTO total_price FROM items i
 JOIN product_orders AS o ON o.order_id=i.order_id
 JOIN users AS u ON u.user_id=o.user_id
 WHERE o.user_id = (SELECT user_id FROM users WHERE user_name=name);
 RETURN total_price;
END;
$$;

SELECT * FROM find_total_price_byName('Joe Biden')
SELECT * FROM find_total_price_byName('Donald Trump')
SELECT * FROM find_total_price_byName('Barack Obama')

