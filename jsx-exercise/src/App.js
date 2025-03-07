import "./App.css";

function App() {
  const date = new Date();
  const currentDate = date.toLocaleDateString();
  let isLoggedIn = true;
  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentDate}</p>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default App;
