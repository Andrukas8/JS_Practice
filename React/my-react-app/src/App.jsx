import Button from "./Button/Button.jsx"
import Button2 from "./Button2.jsx"
import Card from "./Card/Card.jsx"
import Student from "./Student.jsx";



function App() {
  return (
    <>
      <Card />
      <Button />
      <Button2 />
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patric" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Larry"/>
    </>
  );
}

export default App
