function Button(){
    const handleClick = (e) => {
        e.target.textContent = "OUCH!";
    }


    const handleClick2 = (name) => console.log(`${name} Stop Clicking Me!`);
    return(<button onDoubleClick={(e) => handleClick(e)}>Click me 😀</button>)

}

export default Button