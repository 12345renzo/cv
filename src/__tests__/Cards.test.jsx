import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "../components/Cards";

describe("Cards component", () => {
  const defaultProps = {
    dispe: "block",
    img: "none",
    ruta: "",
    title: "Test Title",
    subtitle: "Test Subtitle",
    lore: "Test description",
    se: 11,
  };

  it("renders title", () => {
    render(<Cards {...defaultProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<Cards {...defaultProps} />);
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<Cards {...defaultProps} />);
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("renders image when img is flex", () => {
    const { container } = render(
      <Cards {...defaultProps} img="flex" ruta="/react.svg" />
    );
    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/react.svg");
  });

  it("renders image with empty src when img is none", () => {
    const { container } = render(<Cards {...defaultProps} />);
    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "");
  });
});
