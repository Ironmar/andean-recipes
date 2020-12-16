import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

import "@testing-library/jest-dom";
import AsideImage from "../../../components/sections/AsideImage";
import foodDish from "../../../assets/images/food_dish.jpg";

configure({ adapter: new Adapter() });
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Test in <AsideImage/>", () => {
  const wrapper = shallow(<AsideImage />);
  test("should be return the component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("shuold be return the correct image path", () => {
    const image = wrapper.find("img");
    expect(image.prop("src")).toEqual(foodDish);
    expect(image.prop("alt")).toEqual("food_dish");
  });
});
