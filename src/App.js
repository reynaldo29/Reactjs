import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [number, setNumber] = useState(0);
  return (
    <div className="container text-center">
      <Header/>
      
      <h2>Este valor de number es: {number}</h2>
      
      <img src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"/>
      <hr></hr>
      <button type="button" className="btn btn-primary" onClick={ () => setNumber (number + 1)}>Incrementar</button>

      <button type="button" className="btn btn-danger" onClick= { () => setNumber (number -1)}>Decrementar</button>
      <Footer/>
    </div>
  );
}

export default App;
