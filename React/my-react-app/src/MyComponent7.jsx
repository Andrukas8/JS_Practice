import React, { useState, useEffect } from 'react';

function MyComponent7() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [count, color]);

    useEffect(()=>{
        document.title = `Size ${width} x ${height}`;
    });


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");
    }, []);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button><br />
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>

        </div>
    );
}

export default MyComponent7

