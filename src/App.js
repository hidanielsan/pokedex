import './App.css';
import Navbar from './components/Navbar';
import Documentation from './components/Documentation';
import PokemonListScreen from './components/PokemonListScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataProvider';
import SeeMore from './components/SeeMore';
import 'react-loading-skeleton/dist/skeleton.css'

export default function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <SeeMore />
          <Routes>
            <Route path="/" element={<PokemonListScreen />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
        </main>
      </BrowserRouter>
    </DataProvider>
  );
}