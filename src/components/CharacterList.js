import React, { useEffect, useState } from "react";

import Card from "./Card";
import axios from "axios";


export default function CharacterList() {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      const people = res.data.results;
      console.log(res.data.results);
      setCharacters(people);
    })
    .catch(err => {
      console.log("The Data was not returned", err);
    });
  }, []);

  return (
    <section className="character-list">
      {characters.map((char) => {
        return (
          <Card key={char.name} name={char.name} image={char.image} 
          location={char.location} status={char.status} origin={char.origin} />
        )
      })}
    </section>
  );
}
