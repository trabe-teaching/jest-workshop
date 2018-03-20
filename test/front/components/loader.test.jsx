import React from "react";
import { render } from "enzyme";
import Loader from "components/loader";

describe("front/components/loader", () => {
  it("renders nothing if not visible", () => {
    expect(render(<Loader visible={false} />)).toMatchSnapshot();
  });

  it("renders if visible", () => {
    expect(render(<Loader visible />)).toMatchSnapshot();
  });
});
