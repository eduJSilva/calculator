import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:'',
  firstValue:'',
  secondValue:"",
  increment:'0',
  status: 'idle',
  symbol:'',
  symbols:[],
  equation:[],
  display:[],
  decimal:'',
};





export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    ac:(state)=>{
    state.value='';
    state.firstValue="";
    state.secondValue="";
    state.increment='0';
    state.status='idle';
    state.symbol='';
    state.equation=[];
    state.display=[];
    state.decimal='';
    },
    numero: (state, action) => {

      if (state.symbol){
        state.secondValue +=action.payload
       const a= state.secondValue.replace(/^0+/, '0');
        state.increment=a
        state.display.push(action.payload)
      }
      else{
        state.firstValue +=action.payload
        const b= state.firstValue.replace(/^0+/, '0');
        state.increment=b
        state.display.push(action.payload)
      }
    },

  
    equal:(state, action)=>{

      let goThrough=()=>{

        if(!isNaN(state.value)){

      state.firstValue=''+0;
      state.secondValue=''+0;
      state.symbol='';
    state.increment=state.value
    console.log("ACA?")
    if(state.display[state.display.length-3]=== ('x' || '/')){
      console.log('AHORA ACA')
      state.symbol = state.display[state.display.length-3] + '-' 
      state.firstValue=state.display[state.display.length-4]
      state.secondValue=state.display[state.display.length-1]


      state.increment=state.firstValue
     // -Math.abs(state.secondValue)
      console.log("FIRSTVALUE: "+ state.firstValue)
      console.log("STATE.SYMBOL: " + state.symbol)
      console.log("SECONDVALUE: "+ state.secondValue)
    }

        }else{
          if(state.display[state.display.length-3]=== ('x' || '/')){
            console.log('AHORA ACA')
            state.symbol = state.display[state.display.length-1] + '-' 

            state.increment=state.firstValue
           // -Math.abs(state.secondValue)
            console.log("FIRSTVALUE: "+ state.firstValue)
            console.log("STATE.SYMBOL: " + state.symbol)
            console.log("SECONDVALUE: "+ state.secondValue)
          }else{
            state.symbol='';
            console.log('state.valuejjjj: '+state.firstValue)
          state.increment=state.firstValue
          }
        }
      }

    if (state.symbol==="+"){
      if(state.value){
        state.value=Number(parseFloat(state.value).toFixed(2))+Number(parseFloat(state.secondValue).toFixed(2))
        goThrough()
      }
      else{
        state.value=Number(parseFloat(state.firstValue).toFixed(2))+Number(parseFloat(state.secondValue).toFixed(2))
        goThrough()
    }
     }
     if (state.symbol==="-"){
      if(state.value){
        state.value=Number(parseFloat(state.value).toFixed(2))-Number(parseFloat(state.secondValue).toFixed(2))
        goThrough()
      }
      else{
        state.value=Number(parseFloat(state.firstValue).toFixed(2))-Number(parseFloat(state.secondValue).toFixed(2))
        goThrough()
      }
     }
     if (state.symbol==="/"){
      if(state.value){
        state.value=Number(parseFloat(state.value).toFixed(2))/Number(parseFloat(state.secondValue).toFixed(2))
        goThrough()
      }
      else{
        state.value=Number(parseFloat(state.firstValue).toFixed(2))/Number(parseFloat(state.secondValue).toFixed(2))
      goThrough()

      }
     
     }
     if (state.symbol==="x"){
      if(state.value){
        state.value=Number(parseFloat(state.value).toFixed(2))*Number(parseFloat(state.secondValue).toFixed(2))
        goThrough()
      }
      else{
      state.value=Number(parseFloat(state.firstValue).toFixed(2))*Number(parseFloat(state.secondValue).toFixed(2))
      goThrough()
      }
     
     }

     if (state.symbol==="x-"){
      console.log("VOY POR ACA2: " + state.symbol)
      if(state.value){
        state.value=Number(parseFloat(state.value).toFixed(2))*(-Math.abs(parseFloat(state.secondValue).toFixed(2)))
        goThrough()
      }

      if(state.firstValue && !state.secondValue){
        console.log("THISFIRSTVALUENOW:"+ state.firstValue)
        console.log("THISSECONDVALUENOW:"+ state.secondValue)

        console.log("UN 25: "+5*(-5))
      }

      else{
        state.value=Number(parseFloat(state.firstValue).toFixed(2))*(-Math.abs(parseFloat(state.secondValue).toFixed(2)))
      goThrough()
      }
     
      console.log('state.value: '+state.value)
      state.increment=state.value
     }

     state.increment=state.value

    },
    changeSimbol:(state, action)=>{
      ////////////////////////////////////////////////////////////////////////
      let goThrough=()=>{

        if(!isNaN(state.value)){

      state.firstValue=''+0;
      state.secondValue=''+0;
      state.symbol='';
      console.log('state.valueCHANGESIMBOL: '+state.value)
    state.increment=state.value
    console.log(state.display[state.display.length-2])

        }else{
          if(state.display[state.display.length-1]=== ('x' || '/')){
            state.symbol = state.display[state.display.length-1] + '-' 

            state.increment=state.firstValue
           // -Math.abs(state.secondValue)
            console.log("FIRSTVALUE: "+ state.firstValue)
            console.log("STATE.SYMBOL: " + state.symbol)
            console.log("SECONDVALUE: "+ state.secondValue)
          }else{
            state.symbol='';
            console.log('state.valuejjjj: '+state.firstValue)
          state.increment=state.firstValue
          }
        }
      }


      ////////////////////////////////     
      if (state.symbol==="+"){
        if(state.value){
          state.value=Number(parseFloat(state.value).toFixed(2))+Number(parseFloat(state.secondValue).toFixed(2))
          goThrough()
        }
        else{
          state.value=Number(parseFloat(state.firstValue).toFixed(2))+Number(parseFloat(state.secondValue).toFixed(2))
          goThrough()
       
    
      }
       }
       if (state.symbol==="-"){
        if(state.value){
          state.value=Number(parseFloat(state.value).toFixed(2))-Number(parseFloat(state.secondValue).toFixed(2))
          goThrough()
        }
        else{
          state.value=Number(parseFloat(state.firstValue).toFixed(2))-Number(parseFloat(state.secondValue).toFixed(2))
          goThrough()
        }
       }
       if (state.symbol==="/"){
        if(state.value){
          state.value=Number(parseFloat(state.value).toFixed(2))/Number(parseFloat(state.secondValue).toFixed(2))
          goThrough()
        }
        else{
          state.value=Number(parseFloat(state.firstValue).toFixed(2))/Number(parseFloat(state.secondValue).toFixed(2))
          goThrough()
  
        }
       
        console.log('state.value: '+state.value)
        state.increment=state.value
       }
       if (state.symbol==="x"){
        if(state.value){
          state.value=Number(parseFloat(state.value).toFixed(2))*Number(parseFloat(state.secondValue).toFixed(2))
          goThrough()
        }
        else{
          state.value=Number(parseFloat(state.firstValue).toFixed(2))*Number(parseFloat(state.secondValue).toFixed(2))
        goThrough()
        }
       
        console.log('state.value: '+state.value)
        state.increment=state.value
       }

       if (state.symbol==="x-"){
        console.log("VOY POR ACAcaaaaa: " + state.symbol)
        if(state.value){
          state.value=Number(parseFloat(state.value).toFixed(2))*(-Math.abs(parseFloat(state.secondValue).toFixed(2)))
          goThrough()
        }
        if(state.firstValue && !state.secondValue){
          console.log("THISFIRSTVALUENOW:"+ state.firstValue)
          console.log(5*(-5))
          goThrough()
        }
      
        else{
          state.value=Number(parseFloat(state.firstValue).toFixed(2))*(-Math.abs(parseFloat(state.secondValue).toFixed(2)))
        goThrough()
        }
       
        console.log('state.value: '+state.value)
        state.increment=state.value

        
       }
  
       state.symbol = action.payload
     console.log('symbol: '+state.symbol)
     state.display.push(action.payload)
     state.increment=action.payload

    },
    addDecimal:(state, action)=>{  
       state.decimal='.';

      if (state.symbol && !state.secondValue.includes('.') &&  !state.secondValue.includes('Limit')){
        state.secondValue +=state.decimal
        console.log('firstValue: '+state.firstValue)
        console.log('secondValue: '+state.secondValue)
        state.increment=state.secondValue;    
        state.display.push(state.decimal)
        state.decimal='';
  
      }
     if (!state.symbol && !state.firstValue.includes('.') &&  !state.firstValue.includes('Limit')){
        state.firstValue +=state.decimal
        console.log('firstValue: '+state.firstValue) 
        state.increment=state.firstValue;
        state.display.push(state.decimal)
        state.decimal='';
      }
      
  },
  }
});

export const { increment, decrement, numero, suma, ac, equal, pushEquation, displayConcat, changeSimbol, addDecimal } = calculatorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.calculator.value)`
export const selectCalculator = (state) => state.calculator.value;
export const selectEquation = (state) => state.calculator.equation;
export const selectDisplay = (state) => state.calculator.display.join("");
export const selectSimbol = (state) => state.calculator.simbol;
export const selectIncrement = (state) => state.calculator.increment;


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCalculator(getState());
  if (currentValue % 2 === 1) {
    dispatch(numero(amount));
  }
};

export default calculatorSlice.reducer;