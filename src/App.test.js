import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Shop from "./shop/Shop";

const clickFn = jest.fn();

it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});

describe("Shop", () => {
  it('renders correctly', () => {
    const shop = shallow(<Shop />);
    expect(shop).toMatchSnapshot();
  });

  it.skip("should render the correct items names", () => {
    const wrapper = shallow(
      <div>
        <div>Book</div>
        <div>Music CD</div>
        <div>Chocolate bar</div>
        <div>Imported chocolates</div>
        <div>Perfume</div>
        <div>Imported Perfume</div>
        <div>Headache pills</div>
      </div>
    );

    const texts = wrapper.find().map((node) => node.text());
    expect(texts).to.eql(["Book", "Music CD", "Chocolate bar"]);
  })

  it("button click should add item to cart", () => {
    const component = shallow(<Shop onClick={clickFn} />);
    component.find("button").at(0).simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});
