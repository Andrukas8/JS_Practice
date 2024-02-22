import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Spongebob" />
    </>
  );
}

export default App
