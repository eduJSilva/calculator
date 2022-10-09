import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  numero,
  selectCalculator,
  selectDisplay,
  selectIncrement,
  addDecimal,
  changeSimbol,
  ac,
  equal,
} from './calculatorSlice';
import styles from './Calculator.module.css';

export function Calculator() {
  const count = useSelector(selectCalculator);
  const display = useSelector(selectDisplay);
  const increments = useSelector(selectIncrement);
  const dispatch = useDispatch();

  return (
    <div className={styles.calculator}>
    <Card > 
   
   <div className={styles.calculatorscreen}>
     <div>{display}</div>
        <div className={styles.display} id="display">{increments}</div>
    </div>
 <div className={styles.calculatorkeys}>
      
        <Button
          type="button"
          id="clear"
          aria-label="clear-button"
          className={styles.griditem1}
          onClick={() => dispatch(ac())}
        >
          AC
        </Button>
        <Button
          type="button"
          id="divide"
          aria-label="divide-button"
          className="operator btn btn-info"
          onClick={() => dispatch(changeSimbol("/"))}
        >
          /
        </Button>
        <Button
          type="button"
          id="multiply"
          aria-label="multiply-button"
          className="operator btn btn-info"
          onClick={() => dispatch(changeSimbol("x"))}
        >
          x
        </Button>
        <Button
          type="button"
          id="subtract"
          aria-label="subtract-button"
          className="operator btn btn-info"
          onClick={() => dispatch(changeSimbol("-"))}
        >
          -
        </Button>
        <Button
          className="operator btn btn-info"
          type="button"
          id="add"
          aria-label="add-button"
          onClick={() => dispatch(changeSimbol('+'))}
        >
          +
        </Button>
        <Button
          type="button"
          id="seven"
          aria-label="seven"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(7))}
        >
          7
        </Button>
        <Button
          type="button"
          id="eight"
          aria-label="eight"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(8))}
        >
          8
        </Button>
        <Button
          type="button"
          id="nine"
          aria-label="nine"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(9))}
        >
          9
        </Button>
        <Button
          type="button"
          id="six"
          aria-label="six"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(6))}
        >
          6
        </Button>
        <Button
          type="button"
          id="five"
          aria-label="five"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(5))}
        >
          5
        </Button>
        <Button
          type="button"
          id="four"
          aria-label="four"
          className="btn btn-light waves-effect"
          onClick={() =>dispatch(numero(4))}
        >
          4
        </Button>
        <Button
          type="button"
          id="three"
          aria-label="three"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(3))}
        >
          3
        </Button>
        <Button
          type="button"
          id="two" 
          aria-label="two"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(2))}
        >
          2
        </Button>
       
        <Button
          type="button"
          id="one"
          aria-label="one"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(1))}
        >
          1
        </Button>
        <Button
          type="button"
          id="zero"
          aria-label="zero"
          className="btn btn-light waves-effect"
          onClick={() => dispatch(numero(0))}
        >
          0
        </Button>
        <Button  
          type="button"
          id="decimal"
          aria-label="decimal"
          className="decimal function btn btn-secondary"
          onClick={() => dispatch(addDecimal('.'))}
        >
          .
        </Button>
        <Button
          value="="
          type="button"
          id="equals"
          aria-label="equals"
          className="equal-sign operator btn btn-default"
          onClick={() => dispatch(equal(count))}
        >
          =
        </Button>

        </div>
    </Card>
    
    </div>
  );
}
