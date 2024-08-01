import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Creacte from './Creacte';
import Edituser from './Edituser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        {/* <Route path='/create1'element={<Creacte/>}></Route> */}
        <Route path='/create' element={<Creacte/>}></Route>
        <Route path='/edit/:userid'element={<Edituser/>}></Route>
      </Routes>
      </BrowserRouter>

  
    
    </div>
  );
}

export default App;
