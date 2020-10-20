import React from "react";
// import "jest-enzyme";
import toJSON from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(toJSON(tree)).toMatchSnapshot();
});
