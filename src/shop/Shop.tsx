import React, { useState, useEffect } from "react";

/*List of items for sale. Basic tax is applied to all items at 10%, 
except for books, food, and medical products. Import taxes are 
applied to imported goods at 5%, with no exceptions.*/
type itemProps = {
  id: number;
  name: string;
  price: number;
  basicTax: number;
  importTax: number;
};

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
  const [cart, setCart] = useState<Array<object>>([]); 
  //cart total and tax total starts at 0 dollars.
  const [cartTotal, setCartTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);

  /*useEffect hook adjusts final and tax totals. The dependency array, [cart] 
  keeps track of state changes for the variable within the array. Every time an item is 
  added, useEffect will detect the change and run their respective functions*/
  useEffect(() => {
    const calcFinalTotal = () => {
      //totalVal assigned to type any to print trailing zeros
      let totalVal: any = 0;
      cart.forEach((item: itemProps) => {
        //Calculate the total in taxes and then round to the nearest 5 cents.
        let itemTotal =
          item.price +
          parseFloat((Math.ceil(item.basicTax * 20) / 20).toString()) +
          parseFloat((Math.ceil(item.importTax * 20) / 20).toString());
        totalVal += itemTotal;
      });
      setCartTotal(totalVal.toFixed(2));
    };
    calcFinalTotal();
  }, [cart]);

  useEffect(() => {
    const calcTaxTotal = () => {
      //totalVal assigned to type any to print trailing zeros
      let totalVal: any = 0;
      cart.forEach((item: itemProps) => {
        //Calculate the total in taxes and then round to the nearest 5 cents.
        let itemTotal =
          parseFloat((Math.ceil(item.basicTax * 20) / 20).toString()) +
          parseFloat((Math.ceil(item.importTax * 20) / 20).toString());
        totalVal += itemTotal;
      })
      setTaxTotal(totalVal.toFixed(2));
    };
    calcTaxTotal();
  }, [cart]);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const amountOfItems = (id) => cart.filter((item: itemProps) => item.id === id).length;

  const clearCart = () => {
    if (listItemsInCart().length) return <button onClick={() => setCart([])}>Clear Cart</button>;
  };

  const listItemsToBuy = () => items.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price.toFixed(2)} `}
      <button type="submit" onClick={() => addToCart(item)}>Add</button>
    </div>
  ));

  const listItemsInCart = () => {
    let cartItems: any = [];

    items.forEach((item: itemProps) => {
      let itemAmt = amountOfItems(item.id);
      //itemPrice assigned to string for return value of toFixed method
      let itemPrice: string = (item.price +
        parseFloat((Math.ceil(item.basicTax * 20) / 20).toString()) +
          parseFloat((Math.ceil(item.importTax * 20) / 20).toString())).toFixed(2);

      if (itemAmt > 1) {
        cartItems.push(
          <div key={item.id}>
            {`${item.name}`}: {(itemAmt * parseFloat(itemPrice)).toFixed(2)} ({itemAmt} @ ${itemPrice})
          </div>);
      } else if (itemAmt === 1) {
        cartItems.push(
        <div key={item.id}>
          {`${item.name}`}: ${itemPrice}
        </div>);
      }
    })

    if (!cartItems.length) return <div>(cart is empty)</div>;
    return cartItems;
  };

  return (
    <div>
      STORE
      <div>{listItemsToBuy()}</div><br />
      <div>CART {clearCart()}</div>
      <div>{listItemsInCart()}</div><br />
      <div>TOTAL</div>
      <div>Tax Total: ${taxTotal}</div>
      <div>Final Total: ${cartTotal}</div>
    </div>
  );
};

export default Shop;