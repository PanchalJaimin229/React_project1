import { configureStore } from '@reduxjs/toolkit';
import './App.css';
import Products from './Products';
import userReducer from './userReducer';
import { Provider } from 'react-redux';


// npm i react-redux @reduxjs/toolkit bootstrap react-router-dom
// npm i -g json-server 
// json-server --watch db.json --port 3001


function App() {

  const store = configureStore({
    reducer: {
      products: userReducer
    }
  })

  return (
    <div className="App">
      <Provider store={store}>
        <Products />
      </Provider>
    </div>
  );
}

export default App;
