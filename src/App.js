import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import SearchMovies from './components/searchMovies';
import SearchResult from './components/searchResult';
import Nominations from './components/nominations';
import Banner from './components/banner';

export default function App() {

const [search, setSearch] = useState('')
const [results, setResults] = useState();
const saved = JSON.parse(localStorage.getItem('nominated'))
const [nominated, setNominated] = useState(saved || []);


const onNominate = (nomination) => {
  setNominated([...nominated, nomination])
  localStorage.setItem('nominated', JSON.stringify([...nominated, nomination]))
}

const removeNomination = (nomination) => {
  let removedNomination = [...nominated]
  let index = removedNomination.findIndex(nominationToRemove => nominationToRemove.imdbID === nomination);
  removedNomination.splice(index,1)
  setNominated(removedNomination)
  localStorage.setItem('nominated', JSON.stringify(removedNomination))
}


useEffect(() => {
  axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
  .then(res => setResults(res.data.Search),
  )
  .catch(err => console.log("Error:", err))
}, [search])



  return (
    <div className="App">
      <header className="App-header">
        <h1>WELCOME TO THE SHOPPIES</h1>
        <h3>Choose your top 5 movies to nominate!</h3>
      </header>
      <Banner
        nominated={nominated}
      />
      <SearchMovies
        setSearch={setSearch}
        setResults={setResults}
      />
      <SearchResult
        search={search}
        results={results}
        nominated={nominated}
        setNominated={setNominated}
        onNominate={onNominate}
      />
      <Nominations
        nominated={nominated}
        setNominated={setNominated}
        removeNomination={removeNomination}
      />
    </div>
  );
}

