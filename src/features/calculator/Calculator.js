import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  numero,
  incrementAsync,
  incrementIfOdd,
  selectCalculator,
  selectEquation,
  selectDisplay,
  selectSimbol,
  selectIncrement,
  displayConcat,
  addDecimal,
  changeSimbol,
  ac,
  suma,
  equal,
  pushEquation
} from './calculatorSlice';
import styles from './Calculator.module.css';

export function Calculator() {
  const count = useSelector(selectCalculator);
  const equation = useSelector(selectEquation);
  const display = useSelector(selectDisplay);
  const increments = useSelector(selectIncrement);
  const simbol = useSelector(selectSimbol);
  const dispatch = useDispatch();
  const [incrementAmount, /*setIncrementAmount*/] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>   
     <div><h6>{display}</h6></div>
      <div className={styles.row}>
        <div id="display">{increments}</div>
      </div>


      <div className={styles.row}>
       {/* <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        /> */} 
        <button
          id="clear"
          aria-label="clear-button"
          className={styles.button}
          onClick={() => dispatch(ac())}
        >
          AC
        </button>
        <button
          id="divide"
          aria-label="divide-button"
          className={styles.asyncButton}
          onClick={() => dispatch(changeSimbol("/"))}
        >
          /
        </button>
        <button
          id="multiply"
          aria-label="multiply-button"
          className={styles.button}
          onClick={() => dispatch(changeSimbol("x"))}
        >
          x
        </button>
        <button
          id="subtract"
          aria-label="subtract-button"
          className={styles.button}
          onClick={() => dispatch(changeSimbol("-"))}
        >
          -
        </button>
        <button
          id="add"
          aria-label="add-button"
          className={styles.button}
          onClick={() => dispatch(changeSimbol('+'))}
        >
          +
        </button>
        <button
          id="seven"
          aria-label="seven"
          className={styles.button}
          onClick={() => dispatch(numero(7))}
        >
          7
        </button>
        <button
          id="eight"
          aria-label="eight"
          className={styles.button}
          onClick={() => dispatch(numero(8))}
        >
          8
        </button>
        <button
          id="nine"
          aria-label="nine"
          className={styles.button}
          onClick={() => dispatch(numero(9))}
        >
          9
        </button>
        <button
          id="six"
          aria-label="six"
          className={styles.button}
          onClick={() => dispatch(numero(6))}
        >
          6
        </button>
        <button
          id="five"
          aria-label="five"
          className={styles.button}
          onClick={() => dispatch(numero(5))}
        >
          5
        </button>
        <button
          id="four"
          aria-label="four"
          className={styles.button}
          onClick={() =>dispatch(numero(4))}
        >
          4
        </button>
        <button
          id="one"
          aria-label="one"
          className={styles.button}
          onClick={() => dispatch(numero(1))}
        >
          1
        </button>
        <button
          id="two" 
          aria-label="two"
          className={styles.button}
          onClick={() => dispatch(numero(2))}
        >
          2
        </button>
        <button
          id="three"
          aria-label="three"
          className={styles.button}
          onClick={() => dispatch(numero(3))}
        >
          3
        </button>
        <button
          id="zero"
          aria-label="zero"
          className={styles.button}
          onClick={() => dispatch(numero(0))}
        >
          0
        </button>
        <button  
          id="decimal"
          aria-label="decimal"
          className={styles.button}
          onClick={() => dispatch(addDecimal('.'))}
        >
          .
        </button>
        <button
          id="equals"
          aria-label="equals"
          className={styles.button}
          onClick={() => dispatch(equal(count))}
        >
          =
        </button>


      </div>
    </div>
  );
}
