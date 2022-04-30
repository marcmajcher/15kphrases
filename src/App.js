import './App.css';
import Phrases from './15kphrases';
import { useEffect, useState } from 'react';

function randomPhrase() {
  return Phrases[Math.floor(Math.random() * Phrases.length)];
}

function App() {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    setPhrase(randomPhrase());
  }, []);

  return (
    <div className="container">
      <h1>Fifteen Thousand Useful Phrases</h1>
      <div className='phrase'>
        {phrase}
      </div>
      <div className='btn'>
        <button onClick={() => setPhrase(randomPhrase())}>New Phrase</button>
      </div>
      <footer>
        <div> via <a href="https://www.gutenberg.org/ebooks/18362">gutenberg</a></div>
      </footer>
    </div>
  );
}

export default App;
