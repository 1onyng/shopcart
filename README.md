
## Sales Tax

### Instructions

1. Navigate to [repo](https://github.com/1onyng/shopcart)
2. Clone locally using
   `git clone https://github.com/1onyng/shopcart.git`
3. Install dependencies using `npm install`
4. Start your server using `npm start`
4. Navigate to app in [browser](http://localhost:3000)

### Technologies

* JavaScript
* React

I used [create-react-app](https://goo.gl/26jfy4)
to generate the scaffolding for this app.

### Summary

This project allows a user to add items into a shopping cart and returns a receipt that calculates the sale price of each item(tax included) and total sales price.

### Design 

A main requirement for this application is that it accepts input for shopping baskets and returns a receipt. I designed the app to behave similar to the shopping carts that online retailers use. Users will be able to select from a list of items and add them to a cart that will keep track of all items purchased, the price of each item with appropriate taxes applied, the total in taxes, and final total. 

React is an excellent front-end framework for this project because I expect many re-renders for the shopping cart and totals. React can quickly and efficiently handle these UI updates using its diffing algorithm. I also anticpate a lot of state changes and without a backend to persist data, the use of React hooks will be a good choice to manage these changes. 


