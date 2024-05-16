import React from 'react';
import Footer from "./Footer";
import {shallow} from "enzyme";


describe("Footer", () => {
    it("render without crashing", () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.exists()).toEqual(true);
    });
    it("rendes 'Copyright' ", () => {
      const expectedText = 'Copyright';
      const wrapper = shallow(<Footer />);

      const renderedText = wrapper.text();
      expect(renderedText).toContain(expectedText);
    });
  });
