import React, { useState, useEffect } from 'react';
import axios from "axios";
import Karakter from './components/Karakter';


const App = () => {

  const [karakter, setKarakter] = useState([]);

  useEffect(() => {

          axios
          .get("https://swapi.dev/api/people/")
          .then((res) => setKarakter(res.data))
          .catch((err) => console.log("Data çekerken hata", err))

  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {karakter && karakter.length ? karakter.map((karakter) => (
        <Karakter key={karakter.url} name={karakter.name} birth={karakter.birth_year} height={karakter.height} />
      )) : <p>Veriler yükleniyor...</p>}
    </div>
  );
}

export default App;
