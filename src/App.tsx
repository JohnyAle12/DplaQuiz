import { useState } from "react";
import ComicGrid from "./components/ComicGrid";
import SearchComic from "./components/SearchComic";

function App() {

  const [comics, setComics] = useState<string[]>([]);

    const onAddComic= (value: string) => {
        if (comics.includes(value)) return;
        setComics([ ...comics, value ]);
    }

  return (
    <div className="container mt-5">
      <div className="row">
        <SearchComic
            onAddComic={ (value) => onAddComic(value) }
        />
      </div>
      <div className="row mt-4">
        { comics.map( (comic, index) => <ComicGrid comic={comic} key={index} /> ) }
      </div>
    </div>
  )
}

export default App
