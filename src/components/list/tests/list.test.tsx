import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "..";

describe("List component", () => {
  const mockData = {
    results: [
      { name: "Pikachu", url: "url" },
      { name: "Charizard", url: "url" },
    ],
  };

  it("renders no pokemons when data is empty", () => {
    render(<List data={{ results: [] }} />);

    expect(screen.queryByText("Pikachu")).toBeNull();
    expect(screen.queryByText("Charizard")).toBeNull();
  });

  it("renders the correct number of pokemons", () => {
    render(<List data={mockData} />);
  });
});
