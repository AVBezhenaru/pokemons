import { Card } from "../../card";
import { IPokemon } from "../../card/types/IPokemon";
import { IListProps } from "../types/IListProps";

export const List = ({ data }: IListProps) => {
  return (
    <>
      {data &&
        data.results.map((pokemon: IPokemon) => {
          return <Card key={pokemon.name + Date.now()} pokemon={pokemon} />;
        })}
    </>
  );
};
