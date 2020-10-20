import React from "react";
// import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Shop from "./shop/Shop";

// configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});

describe("Shop", () => {
  it('renders correctly', () => {
    const shop = shallow(<Shop />);
    expect(shop).toMatchSnapshot();
  });
});
