import DiceOne from './components/DiceOne';
import DiceTwo from './components/DiceTwo';
import DiceThree from './components/DiceThree';
import DiceFour from './components/DiceFour';
import DiceFive from './components/DiceFive';
import DiceSix from './components/DiceSix';

import './style.scss';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(null);
  const [random, setRandom] = useState(null);
  const [results, setResults] = useState('');

  useEffect(() => {
    const newValue = parseInt(prompt('Enter a value between 1 and 6:'), 6);
    setValue(newValue);

    const newRandom = Math.floor(Math.random() * 6) + 1;
    setRandom(newRandom);

    if (newRandom === newValue) {
      setResults('You Win!');
    } else {
      setResults('You Lose!');
    }
  }, []);

  const renderDiceComponent = (value) => {
    switch (value) {
      case 1:
        return <DiceOne />;
      case 2:
        return <DiceTwo />;
      case 3:
        return <DiceThree />;
      case 4:
        return <DiceFour />;
      case 5:
        return <DiceFive />;
      case 6:
        return <DiceSix />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="dice">
        <div className="random">
          <span className="mine">random</span>
          {renderDiceComponent(random)}
        </div>

        <div className="value">
          <span className="yours">yours</span>
          {renderDiceComponent(value)}
        </div>
      </div>
      <h1 className="result">{results}</h1>
    </div>
  );
}

export default App;
