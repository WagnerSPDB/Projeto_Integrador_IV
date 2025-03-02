import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Upload from './pages/Upload';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/sobrenós' element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
