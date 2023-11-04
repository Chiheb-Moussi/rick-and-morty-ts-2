import { useEffect, useState } from "react";
import { CharacterModel } from "./Character.model";
import CharacterCard from "./CharacterCard";
import axios from "axios";

type CharactersData = {
  results: CharacterModel[];
};

const Characters = () => {
  const [characters, setCharacters] = useState<ReadonlyArray<CharacterModel>>(
    []
  );
  useEffect(() => {
    axios
      .get<CharactersData>("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results ?? []));
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {characters.length > 0 &&
            characters.map((character: CharacterModel) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
