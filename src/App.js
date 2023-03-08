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
      <div className='Info'>
        <h1>Jonathan Tackett</h1>
        <h2>MERN Fullstack Software Engineer</h2>
        <div className='Info-links'>
        <a className='App-link' href="https://docs.google.com/document/d/1MP6tb-hVue5M2fR0mDt3n75xfn0LievHw5D9QPlNK8w/edit?usp=sharing">Resume</a>
        <a className='App-link' href="http://linkedin.com/in/jonathan-tackett-034783260 ">LinkedIn</a>
        <a className='App-link' href="https://github.com/JonCTack/">GitHub</a>
        </div>
      </div>
      <div className="WebSlide">
        <button className='slideButton' onClick={() => slideChange(-1)}>{'<'}</button>
        <Webslide slideNumber={slideNumber}/>
        <button className='slideButton' onClick={() => slideChange(1)}>{'>'}</button>
      </div>
    </div>
  );
}

export default App;
