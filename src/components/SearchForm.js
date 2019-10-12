import React, { useState, useEffect } from "react";
import CharacterCard from "./Card";

export default function SearchForm({characterData}) {
  const characters = characterData;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchResults = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(searchResults);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor="name">Search:</label>
       <input
       id="name"
       type="text"
       name="textfield"
       Placeholder="Search"
       value={searchTerm}
       onChange={handleChange}
       />
     </form>
    </section>
  );
}
