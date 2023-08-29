import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "../ui/card";
import { IPokemon } from "../types/IPokemon";

const mockPokemon: IPokemon = {
  name: "Pikachu",
  url: "https://pokeapi.co/api/v2/pokemon/25/",
};

describe("Card component", () => {
  it("renders the Pokemon name", async () => {
    const { findByText } = render(<Card pokemon={mockPokemon} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const nameElement = await findByText(mockPokemon.name);
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the Pokemon type", async () => {
    const { findByText } = render(<Card pokemon={mockPokemon} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const typeElement = await findByText(/Type:/);
    expect(typeElement).toBeInTheDocument();
  });
});
