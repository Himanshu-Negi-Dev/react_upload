import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
   const count = useSelector((state) => state.counterReducer);
   const isLogged = useSelector((state) => state.loggedReducer);
   const dispatch = useDispatch();
   return (
      <>
         <h1>count {count}</h1>
         <button onClick={() => dispatch(increment(2))}>+</button>
         <button onClick={() => dispatch(decrement(2))}>-</button>
         {isLogged ? <h3>valuable information is shoudn't see</h3> : ""}
      </>
   );
}

export default App;
