import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import App from "./App";
import Shop from "./shop/Shop";

it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});

describe("Shop", () => {
  it('renders correctly', () => {
    const shop = shallow(<Shop />);
    expect(shop).toMatchSnapshot();
  });

  it('test the listItemsToBuy function', () => {
    const wrapper = renderer.create(<Shop />);
    const inst = wrapper.getInstance();
    setTimeout(() => {
      expect(inst.listItemsToBuy()).toMatchSnapshot();
    });   
  });

    it('test the listItemsInCart function', () => {
    const wrapper = renderer.create(<Shop />);
    const inst = wrapper.getInstance();
    setTimeout(() => {
      expect(inst.listItemsInCart()).toMatchSnapshot();
    });   
  });
});
