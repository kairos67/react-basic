import React, { useState } from 'react';

const Counter = (props) =>{
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count+1);
    }

    const propsClick = props.click || '클릭'
    return (
     
        <button onClick={increment}>
           {propsClick} Increment {count}
        </button>      
      
    );
};

export default Counter;