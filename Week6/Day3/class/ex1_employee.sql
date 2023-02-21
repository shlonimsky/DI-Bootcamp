-- EXERCISE
-- Using the Emp/Dept database
-- 1. Create a Boss table with the columns boss_id, boss_name, boss_type (ie.nice, angry, funny ect...), -- and dept_number:-- 
-- The boss table,has a one to one relationship with the department table:-- => a department can be managed by only 1 boss, and a boss can 
-- manage only 1 department
CREATE TABLE boss(
	boss_id SERIAL PRIMARY KEY,
	boss_name VARCHAR(50)NOT NULL,
	boss_type VARCHAR(50),
	dept_number INTEGER UNIQUE REFERENCES DEPARTMENT (DEPTCODE)
)
-- 2. Add a few bosses : one for the finance dept, one for sales and one for marketing--
INSERT INTO BOSS (boss_name,boss_type,dept_number)
VALUES ('Adam','angry',20),
('Jhon','Durk',(SELECT DEPTCODE FROM DEPARTMENT WHERE DeptName = 'SALES')),
('Lusy','nice',(SELECT DEPTCODE FROM DEPARTMENT WHERE DeptName = 'ADMIN'))

-- UPDATE BOSS
-- SET dept_number =(SELECT DEPTCODE FROM DEPARTMENT WHERE DeptName = 'SALES')
-- WHERE boss_name='Jhon'
-- UPDATE BOSS
-- SET dept_number =(SELECT DEPTCODE FROM DEPARTMENT WHERE DeptName = 'ADMIN')
-- WHERE boss_name='Lusy'
-- UPDATE BOSS
-- SET dept_number =40
-- WHERE boss_name='Ben'
SELECT * FROM BOSS
-- 3. What is the type and name of the boss of the dept Finance (show the dept name, not the dept id)
SELECT boss_name,boss_type, dept_number, DeptName FROM boss AS b
JOIN DEPARTMENT AS d
ON b.dept_number=d.DEPTCODE
where DeptName = 'FINANCE'
