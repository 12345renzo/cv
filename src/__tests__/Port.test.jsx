import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Port from "../components/Port";

describe("Port component", () => {
  const defaultProps = {
    ruta: "/img/test.webp",
    titu: "Test Project",
    lore: "Test description",
    lik: "https://example.com",
  };

  it("renders project title", () => {
    render(<Port {...defaultProps} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<Port {...defaultProps} />);
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("links to external URL", () => {
    render(<Port {...defaultProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders project image", () => {
    const { container } = render(<Port {...defaultProps} />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("src", "/img/test.webp");
  });
});
