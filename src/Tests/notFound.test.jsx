import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "../Components/notFound";

afterEach(cleanup);

describe("Not Found page", () => {
  it("should be working", () => {
    const { container, getByText } = render(<NotFound />);

    console.log(getByText("Not Found"));
    expect(getByText("Not Found")).toBeInTheDocument();
  });
});
