import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Introducer } from './pages/Introducer';
import { Quiz } from './pages/Quiz';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Introducer/>}/>
          <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
