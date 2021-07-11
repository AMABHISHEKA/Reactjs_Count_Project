import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const [count,setCount] = useState(0);
const onButtonClick = () => {
     setCount(count + 1);
}
return(
    <div>
        <button onclick={onButtonClick}>Click Me !</button>
        <h1> Cuurent Count :{count} </h1>
    </div>
);