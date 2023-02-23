import { useState } from "react";
import CharacterGrid from "./components/CharacterGrid";
import SearchHero from "./components/SearchCharacter";

function App() {

  const [heroNames, setHeroNames] = useState<string[]>([]);

    const onAddCharacter = (value: string) => {
        if (heroNames.includes(value)) return;
        setHeroNames([ ...heroNames, value ]);
    }

  return (
    <div className="container mt-5">
      <div className="row">
        <SearchHero
            onAddCharacter={ (value) => onAddCharacter(value) }
        />
      </div>
      <div className="row mt-4">
        { heroNames.map( (hero, index) => <CharacterGrid hero={hero} key={index} /> ) }
      </div>
    </div>
  )
}

export default App
