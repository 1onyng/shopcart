import React, { useState, useEffect } from "react";

const items = [
  {
    id: 1,
    name: "Book",
    price: 12.49,
    basicTax: 0,
    importTax: 0
  },
  {
    id: 2,
    name: "Music CD",
    price: 14.99,
    basicTax: 14.99 * .1,
    importTax: 0
  },
  {
    id: 3,
    name: "Chocolate bar",
    price: 0.85,
    basicTax: 0,
    importTax: 0
  },
  {
    id: 4,
    name: "Imported chocolates",
    price: 10.00,
    basicTax: 0,
    importTax: 10.00 * .05
  },
  {
    id: 5,
    name: "Perfume",
    price: 18.99, 
    basicTax: 18.99 * .1,
    importTax: 0
  },
  {
    id: 6,
    name: "Imported Perfume",
    price: 47.50,
    basicTax: 47.50 * .1,
    importTax: 47.50 * .05
  },
  {
    id: 7,
    name: "Headache pills",
    price: 9.75,
    basicTax: 0,
    importTax: 0
  },
];

const Shop = () => {
  //useState hook initializes cart as empty array. setCart makes changes to cart.
  const [cart, setCart] = useState([]); 
  const [cartTotal, setCartTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  useEffect(() => {
    tax();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      let tot = cart[i].price + 
        parseFloat((Math.ceil(cart[i].basicTax * 20) / 20).toFixed(2)) + 
          parseFloat((Math.ceil(cart[i].importTax * 20) / 20).toFixed(2));
      totalVal += tot; 
    }
    setCartTotal(totalVal.toFixed(2));
  };

  const tax = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      let tot = parseFloat((Math.ceil(cart[i].basicTax * 20) / 20).toFixed(2)) + 
        parseFloat((Math.ceil(cart[i].importTax * 20) / 20).toFixed(2));
      totalVal += tot;
    }
    setTaxTotal(totalVal.toFixed(2));
  };

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsToBuy = () => items.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price.toFixed(2)} `}
      <button type="submit" onClick={() => addToCart(item)}>Add</button>
    </div>
  ));

  const listItemsInCart = () => {
    let cartItems = [];

    items.forEach((item) => {
      let itemAmt = amountOfItems(item.id);
      let itemPrice = (item.price +
        parseFloat((Math.ceil(item.basicTax * 20) / 20)) +
          parseFloat((Math.ceil(item.importTax * 20) / 20))).toFixed(2);

      if (itemAmt > 1) {
        cartItems.push(
          <div key={item.id}>
            {`${item.name}`}: {(itemAmt * itemPrice).toFixed(2)} ({itemAmt} @ ${itemPrice})
          </div>);
      } else if (itemAmt === 1) {
        cartItems.push(
        <div key={item.id}>
          {`${item.name}`}: ${itemPrice}
        </div>);
      }
    })

    if (cartItems.length) return cartItems;

    return <div>(cart is empty)</div>;
  };

  return (
    <div>
      STORE
      <div>{listItemsToBuy()}</div><br />
      <div>CART</div>
      <div>{listItemsInCart()}</div><br />
      <div>Sales Taxes: ${taxTotal}</div>
      <div>Total: ${cartTotal}</div>
      <div>
        <button onClick={() => setCart([])}>Empty Cart</button>
      </div>
    </div>
  );
};

export default Shop;