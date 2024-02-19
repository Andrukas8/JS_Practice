const names = ["Spongebog", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobies": ["jellyfishing", "karate", "cooking"]
}

const people = [
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]
const jsonString = JSON.stringify(people);

console.log(jsonString);


// parsing

const jsonNames = `["Spongebog", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobies": ["jellyfishing", "karate", "cooking"]
}`;

const jsonPeople = `[
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]`;

const parsedJsonPeople = JSON.parse(jsonPeople);

console.log(parsedJsonPeople);

// fetching
fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.isEmployed)))
.catch(error => console.lerror(error));