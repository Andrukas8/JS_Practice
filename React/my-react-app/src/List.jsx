import PropTypes from 'prop-types'

function List(props) {
    const category = props.category;
    const itemList = props.items;

    // itemList.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical by name
    // fruits.sort((a, b) => a.calories - b.calories); // by calories
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // low cal fruits
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);
    return <>
                <h3>{category}</h3>
                <ul>{listItems}</ul>
            </>
    }

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number                                      
                                                }))
}

List.defaultProps = {
    category: "category",
    items: [],
}

export default List

// in App.jsx:
// import List from "./List";

// function App() {

//   const fruits = [{ id: 1, name: "apple", calories: 95 },
//                   { id: 2, name: "orange", calories: 45 },
//                   { id: 3, name: "banana", calories: 105 },
//                   { id: 4, name: "coconut", calories: 159 },
//                   { id: 5, name: "pineapple", calories: 37 }];

//   const vegetables = [{ id: 6, name: "potatoes", calories: 110 },
//                       { id: 7, name: "celery", calories: 15 },
//                       { id: 8, name: "carrots", calories: 25 },
//                       { id: 9, name: "corn", calories: 63 },
//                       { id: 10, name: "broccoli", calories: 37}];

//   return (
//     <>
//       <List items={fruits} category="Fruits" />
//       <List items={vegetables} category="Vegetables" />      
//     </>
//   );
// }

// export default App