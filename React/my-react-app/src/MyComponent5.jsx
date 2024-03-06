import React, { useState } from 'react';


function MyComponent5() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index}  onClick={() => handleRemoveFood(index)}>{food}</li>)}
                <input type="text" id="foodInput" placeholder="Enter Food Name"/>
                <button onClick={handleAddFood}>Add Food</button>
            </ul>
        </div>
    );
}

export default MyComponent5