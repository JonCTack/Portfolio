import { useState } from 'react';
import './App.css';
import Webslide from './components/webslide';

function App() {

  const [slideNumber, setSlideNumber] = useState(0)

  const slideChange = (num) => {
    if(slideNumber === 0 && num === -1){
      setSlideNumber(2)
    } else if (slideNumber === 2 && num === 1){
      setSlideNumber(0)
    } else {
      setSlideNumber(slideNumber + num)
    }
  }

  return (
    <div className="App">
      <button onClick={() => slideChange(-1)}>-</button>
      <Webslide slideNumber={slideNumber}/>
      <button onClick={() => slideChange(1)}>+</button>
    </div>
  );
}

export default App;
