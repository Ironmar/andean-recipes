import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

import "@testing-library/jest-dom";
import App from "../App";
configure({ adapter: new Adapter() });
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Test in <App/>", () => {
  test("should be return the component correctly", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
