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
      <section className='content'>
        <h1>Fifteen Thousand Useful Phrases</h1>
        <p className='phrase'>
          {phrase}
        </p>
        <button onClick={() => setPhrase(randomPhrase())}>New Phrase</button>
      </section>
      <footer>
        <a href="https://www.gutenberg.org/ebooks/18362">Kleiser, 1917</a>
      </footer>
    </div>
  );
}

export default App;
