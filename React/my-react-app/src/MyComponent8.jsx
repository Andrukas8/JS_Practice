import React, { useState, useEffect, useRef } from 'react';

function MyComponent8() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "green";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "red";
    }

    return (
        <div>
            <button onClick={handleClick1}>
                Click Me 1
            </button><br />
            <input ref={inputRef1} type="text" /><br />


            <button onClick={handleClick2}>
                Click Me 2
            </button><br />
            <input ref={inputRef2} type="text" /><br />


            <button onClick={handleClick3}>
                Click Me 3
            </button><br />
            <input ref={inputRef3} type="text" /><br />
        </div>
    );
}

export default MyComponent8