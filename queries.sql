-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName AS [Product Name],
       CategoryName AS Category
  FROM Product AS p
       JOIN
       Category AS c ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT Id AS [Order ID],
       ShipName AS [Shipper's Company Name]
  FROM [Order]
 WHERE OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName AS [Product Name],
       Quantity,
       OrderId AS [Order ID]
  FROM OrderDetail AS OD
       JOIN
       Product AS P ON P.Id = OD.ProductId
 WHERE OD.OrderId = "10251";


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT id AS [Order Id],
       CompanyName AS [Company Name],
       LastName AS Employee
  FROM [Order] AS O
       JOIN
       Customer AS C ON C.id = O.CustomerId
       JOIN
       Employee AS E ON E.id = O.EmployeeId;