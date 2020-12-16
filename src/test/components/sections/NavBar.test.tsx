import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

import "@testing-library/jest-dom";
import NavBar from "../../../components/sections/NavBar";
import tinkin from "../../../assets/images/tinkin.png";
configure({ adapter: new Adapter() });
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Test in <NavBar/>", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>>;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });
  test("should be return the component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("shuold be return the correct logo path", () => {
    const image = wrapper.find(".logo");
    expect(image.prop("src")).toEqual(tinkin);
    expect(image.prop("alt")).toEqual("tinkin_logo");
  });

  test("should be return the text of button", () => {
    const text = wrapper.find(".add-button");
    expect(text.text()).toEqual("Add Recipe");
  });
});
