import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

import "@testing-library/jest-dom";
import FormModal from "../../../components/generics/FormModal";
configure({ adapter: new Adapter() });
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Test in <FormModal/>", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>>;
  const setShowModal = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<FormModal setShowModal={setShowModal} />);
  });
  test("should be return the component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
