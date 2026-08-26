import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../components/Main";

describe("Main component", () => {
  it("renders subtitle", () => {
    render(<Main subtitle="Mi subtítulo" title="Mi título" />);
    expect(screen.getByText("Mi subtítulo")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Main subtitle="Mi subtítulo" title="Mi título" />);
    expect(screen.getByText("Mi título")).toBeInTheDocument();
  });

  it("renders close button linking to home", () => {
    render(<Main subtitle="test" title="test" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
