import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Product from './components/Product/Product';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
        <SearchBar />
        <div className="results">
          <div className="results__route">{'Electrónica, audio y video > iPod > Reproductores > iPod touch > 32GB'} </div>
          <div className="results__container">
            <Routes>
              <Route path="/" element={<div/>} />
              <Route path="/items" element={<Search/>} />
              <Route path="items/:itemId" element={<Product />} />
              <Route path="*" element={<Navigate replace to="/" />} /> 
            </Routes> 
          </div>
        </div>             
    </div>
  );
}

export default App;
