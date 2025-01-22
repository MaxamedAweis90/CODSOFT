import React, { useState } from 'react';
import './Style.css';

function App() {
  const [input, setInput] = useState(''); 


  const handleClick = (value) => {
    if (value === 'C') {
      setInput(''); 
    } else if (value === '=') {
      try {
        const ChangeTheSign = input.replace(/×/g, '*').replace(/÷/g, '/');
        setInput(eval(ChangeTheSign).toString()); 
      } catch {
        setInput('Wrong Input'); 
      }
    } else if (value === '()') {
      const OpenParan = (input.match(/\(/g) || []).length;
      const CloseParan = (input.match(/\)/g) || []).length;

      if (OpenParan > CloseParan && input.slice(-1) !== '(') {
        
        setInput((prev) => prev + ')');
      } else {
        
        setInput((prev) => prev + '(');
      }
    } else {
      setInput((prev) => prev + value); 
    }
  };

  
  const handleBackspace = () => {
    setInput(input.slice(0, -1)); 
  };

  return (
    <div className="body">
      <div className="calculator">
        <h1>MaxCalculator</h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="display">
            <input type="text" value={input} readOnly />
          </div>

          <div>
            <input type="button" value="C" onClick={() => handleClick('C')} />
            <input type="button" value="()" onClick={() => handleClick('()')} />
            <input type="button" value="⌫" onClick={handleBackspace} />
            <input type="button" value="÷" onClick={() => handleClick('÷')} />
          </div>

          <div>
            <input type="button" value="7" onClick={() => handleClick('7')} />
            <input type="button" value="8" onClick={() => handleClick('8')} />
            <input type="button" value="9" onClick={() => handleClick('9')} />
            <input type="button" value="×" onClick={() => handleClick('×')} />
          </div>

          <div>
            <input type="button" value="4" onClick={() => handleClick('4')} />
            <input type="button" value="5" onClick={() => handleClick('5')} />
            <input type="button" value="6" onClick={() => handleClick('6')} />
            <input type="button" value="-" onClick={() => handleClick('-')} />
          </div>

          <div>
            <input type="button" value="1" onClick={() => handleClick('1')} />
            <input type="button" value="2" onClick={() => handleClick('2')} />
            <input type="button" value="3" onClick={() => handleClick('3')} />
            <input type="button" value="+" onClick={() => handleClick('+')} />
          </div>

          <div>
            <input type="button" value="%" onClick={() => handleClick('%')} />
            <input type="button" value="0" onClick={() => handleClick('0')} />
            <input type="button" value="." onClick={() => handleClick('.')} />
            <input
              type="button"
              value="="
              className="equal"
              onClick={() => handleClick('=')}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
