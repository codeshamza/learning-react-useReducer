import React, { useEffect , useReducer} from 'react'
import "./App.css";

function Main() {
    function reducerfunc(states, action) {
        if (action.type == "INCR") {
            states = states + 1;
        }
   
        if (states > 0 && action.type == "Dec") {
            states = states - 1;
        }
    
         return states;
    }
const [states,dispatch] = React.useReducer(reducerfunc, 0)
    return (
     <>
     <span>
        {states}
     </span>
        <button onClick={()=> dispatch({ type : "INCR"})} className="btns">Increment</button>
        <button onClick={()=> dispatch({ type : "Dec"})} className="btns">Decrement</button>

     </>
    );
}

export default Main
