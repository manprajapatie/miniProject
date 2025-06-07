import React, { useCallback, useState, memo } from "react";

function UseCallback() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked!")
    }, [])


    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
            <Child onClick={handleClick} />
        </div>
    );
}


//defination
//we have to wrap function with memo that have to prevent re-render, and then use useCallback() hook that is prevent re render function, that will take two parameters first one is arrow function and second is array of dependancy. it will re render function or component when dependency had any change.

//difference betbeen useMemo and useCallback
//useMemo is used to prevent data re rendering
//useCallback is used to prevent function re rendering


const Child = memo(function Child({ onClick }) {
    console.log("Child rendered");
    return <button onClick={onClick}>Click me</button>;
})
export default UseCallback;
