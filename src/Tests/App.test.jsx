import React from "react";
import { render } from "@testing-library/react";
import ShallowRenderer from "react-shallow-renderer";
import App from "../App";

describe("Getflix test suite", () => {
  it("should display the home page", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe("div");
    expect(result.props.children.type).toBe("main");
  });
});
