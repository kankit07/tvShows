import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage';
import ShowDetails from './pages/ShowDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [bodyPart, setbodyPart] = useState('all')
  return (
    <div className="App">
      <Navbar setbodyPart={setbodyPart}/>
      <Routes>
        <Route path='/' element={<Homepage bodyPart={bodyPart} setbodyPart={setbodyPart}/>}/>
        <Route path='/shows/:id' element={<ShowDetails/>}/> 
      </Routes>
    </div>
  );
}

export default App;
