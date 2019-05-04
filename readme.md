# Furniture store

By Tristan Setha 04/26/19

## Description
 retrieving data from a furniture store's existing API
 
## Run
<br>Make sure you have [Node.js](https://nodejs.org/en/) installed. Run the following commands in the project root directory:
```
npm i
```
```
npm run start
```

## Instructions for Code Challenge

User Story:

As a person looking to purchase furniture I would like a explore the inventory of the "Furniture Store" using a computer or mobile device.

Instructions:

Build a customer facing web application to view the inventory of the furniture store using HTML, JS, and CSS.

You can use any additional JS or CSS libraries you choose such as jQuery, bootstrap, axios etc... You can either include the files with your app or import them using external CDN's.

The application must retrieve data from the Furniture Stores existing API.  The API returns all the items from the store as 1 large payload so it is up to you, the developer, to organize and display that data in a clean and easy to navigate way. The format of the data will always stay the same, but the items available may change, so you should not store or hardcode the items themselves.

Example:

Your file structure could be something like this:

```
FurnitureStore/
    |-- index.html
    |-- js/
        |-- script.js
    |-- css/
        |-- style.css
```
But you can create more files or organize the project however you see fit.

Development requirements:

* Must be responsive
* Must make an API call and use the returned data.
* Must implement some sort of search/filter criteria.

API:

https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture
