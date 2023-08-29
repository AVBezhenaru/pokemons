import useSWR from "swr";
import { Err } from "../../../pages/home/ui/styled";
import { fetcher } from "../../../utils/fetcher";
import { IPokemon } from "../types/IPokemon";
import { IPokemonInfo } from "../types/IPokemonInfo";
import { Abilities, Stat, Type, Wrapper } from "./styled";

export const Card: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {
  const { data, error } = useSWR<IPokemonInfo>(`${pokemon.url}`, fetcher);

  if (error)
    return (
      <Err>
        <p>Oops, something went wrong!!!"</p>
      </Err>
    );

  return (
    <>
      {data ? (
        <Wrapper>
          <img src={`${data.sprites.front_default}`} alt="" />
          <h1>{pokemon.name}</h1>
          <Type>
            <h4>Type: </h4>
            {data.types &&
              data.types.map((item) => {
                return (
                  <p key={item.type.name + Date.now()}>{item.type.name}</p>
                );
              })}
          </Type>
          <Abilities>
            <h4>Abilities: </h4>
            {data.abilities &&
              data.abilities.map((item) => {
                return (
                  <p key={item.ability.name + Date.now()}>
                    {item.ability.name}
                  </p>
                );
              })}
          </Abilities>
          <Stat>
            <h4>Stat: </h4>
            {data.stats &&
              data.stats.map((item) => {
                return (
                  <p key={item.stat.name + Date.now()}>
                    {item.stat.name}: {item.base_stat}
                  </p>
                );
              })}
          </Stat>
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};
