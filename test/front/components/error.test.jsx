import React from "react";
import { render } from "enzyme";
import Error from "components/error";

describe("front/components/error", () => {
  it("renders nothing if not visible", () => {
    expect(render(<Error visible={false} />)).toMatchSnapshot();
  });

  it("renders if visible", () => {
    expect(render(<Error visible />)).toMatchSnapshot();
  });
});
