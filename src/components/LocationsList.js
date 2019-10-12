// import React, { useEffect, useState } from "react";
// import LocationCard from "./LocationCard";
// import axios from "axios";

// export default function LocationsList() {


//  const [ locations, setLocations ] = useState([]);

//  useEffect(() => {
//      axios
//      .get('https://rickandmortyapi.com/api/location/')
//       .then((res) => {
//           setLocations(res.data.results);
//       })
//   }, []);

//  return (
//      <section className="location-list">
//          {locations.map((loc) => {
//              return (
//                  <LocationCard key={loc.name} name={loc.name} dimension={loc.dimension} residents={loc.residents.length} />
//              )
//          })}
//      </section>
//  );

// }