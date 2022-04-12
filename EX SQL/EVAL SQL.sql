
/* Evaluation 1 : ex2*/

/*liste des contacts français */

SELECT CompanyName AS Société, ContactName AS Contact, ContactTitle AS Fonction, Phone AS Téléphone
FROM customers
WHERE country= 'france';


/*Produits vendus par le fournisseur « Exotic Liquids » :*/
SELECT  ProductName AS Produit , UnitPrice AS Prix
FROM products
JOIN  suppliers ON products.SupplierID=suppliers.SupplierID
WHERE companyname="Exotic Liquids";


/*Nombre de produits vendus par les fournisseurs Français dans l’ordre décroissant :*/

/*SELECT ProductName AS Fournisseurs
FROM products */

/*SELECT CompanyName AS Fournisseur, Quantity AS Nombre de commandes 
FROM customers , order details AS 

WHERE Quantity >10 */


SELECT CompanyName, COUNT(*) AS 'Nb'
FROM customers
JOIN  orders ON orders.CustomerID= customers.CustomerID
WHERE country="france"
GROUP BY CompanyName 
HAVING COUNT(*) > 10;



SELECT CompanyName AS fournisseurs, COUNT(productname) AS 'nbre d\'articles'
FROM suppliers 
JOIN  products ON products.SupplierID=suppliers.SupplierID
WHERE country ='france' 
GROUP BY CompanyName ;


SELECT companyname AS 'CLIENT', country, SUM(orderdetails.UnitPrice*orderdetails.Quantity) AS 'CA'
FROM customers 
JOIN orders 
ON orders.CustomerID= customers.CustomerID
JOIN orderdetails
ON orders.OrderID=orderdetails.OrderID
GROUP BY companyname,country
HAVING CA > 30000
ORDER BY CA DESC;



SELECT DISTINCT customers.Country AS pays 
FROM suppliers
JOIN products
ON products.SupplierID=suppliers.SupplierID 
JOIN orderdetails
ON orderdetails.ProductID=products.ProductID
JOIN orders
ON orders.OrderID=orderdetails.OrderID
JOIN customers 
ON  customers.CustomerID=orders.CustomerID;



SELECT customers.companyName AS clients, orderdate 
FROM customers  
JOIN orders  
ON customers.CustomerID=orders.CustomerID
WHERE customers.companyName= "Du monde entier"
ORDER BY orderdate DESC;


SELECT YEAR(orderdate), SUM(orderdetails.UnitPrice*orderdetails.Quantity) AS 'CA'
FROM  orders 
JOIN orderdetails
ON orders.OrderID=orderdetails.OrderID
GROUP BY YEAR(orderdate) ;


SELECT MONTH(ORDERDATE), SUM(orderdetails.UnitPrice*orderdetails.Quantity) AS 'CA'
FROM  orders 
JOIN orderdetails
ON orders.OrderID=orderdetails.OrderID
WHERE YEAR(ORDERDATE) = 1997
GROUP BY MONTH(ORDERDATE);
 
 SELECT customerID, AVG(shipvia)
FROM  orders 
JOIN orderdetails
ON orders.OrderID=orderdetails.OrderID
GROUP BY customerID;


SELECT  AVG (DATEDIFF (shippeddate,orderdate)) AS 'délai'
FROM orders 

SELECT  AVG (DATEDIFF (shippeddate,orderdate)) AS 'délai'
FROM orders 
performance_schemaexo1client1