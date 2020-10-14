import React from "react";

const items = [
  {
    id: 1,
    name: "Book",
    price: 12.49
  },
  {
    id: 2,
    name: "Music CD",
    price: 14.99
  },
  {
    id: 3,
    name: "Chocolate bar",
    price: 0.85
  },
  {
    id: 4,
    name: "Imported Chocolate",
    price: 10
  },
  {
    id: 5,
    name: "Perfume",
    price: 18.99
  },
];

const Shop = () => {
  const [cart, setCart] = React.useState([]);
  const subTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
  const salesTax = subTotal * .1;
  const cartTotal = subTotal + salesTax;


  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsToBuy = () => items.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price}`}
      <button type="submit" onClick={() => addToCart(item)}>Add</button>
    </div>
  ));

  const listItemsInCart = () => items.map((item) => (
    <div key={item.id}>
      ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
      <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  ));

  return (
    <div>
      STORE
      <div>{listItemsToBuy()}</div>
      <div>CART</div>
      <div>{listItemsInCart()}</div>
      <div>Sales Taxes: ${salesTax}</div>
      <div>Total: ${cartTotal}</div>
      <div>
        <button onClick={() => setCart([])}>Clear</button>
      </div>
    </div>
  );
};

export default Shop;