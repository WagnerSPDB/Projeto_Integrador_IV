import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Upload from './pages/Upload';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
