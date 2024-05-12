import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
  // crashing test case
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });
});
