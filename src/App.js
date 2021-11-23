import React from 'react';
import {Route, Routes} from 'react-router-dom'
import MovieList from './Movies/MovieList'
import DesCard from './Description/DesCard'
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path=":id" element={<DesCard/>}/>
    </Routes>
  );
}

export default App;
