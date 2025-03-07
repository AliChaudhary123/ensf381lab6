import "./App.css";
import EngineeringTopic from "./EngineeringTopics";

function App() {
  const date = new Date();
  const currentDate = date.toLocaleDateString();
  let isLoggedIn = true;
  return (
    <>
      <div className="App">
        <h1>ENSF-381: Full Stack Web Development</h1>
        <p>React Components</p>
        <p>{currentDate}</p>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      </div>
      <EngineeringTopic />
    </>
  );
}

export default App;
