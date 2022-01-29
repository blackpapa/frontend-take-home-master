import React from "react";
import { render, cleanup } from "@testing-library/react";
import ProgressBar from "./../Components/progressBar";

afterEach(cleanup);

describe("Progress bar", () => {
  it("should be working", () => {
    const { getByText } = render(<ProgressBar />);
    getByText(/Loading/);
  });
});
