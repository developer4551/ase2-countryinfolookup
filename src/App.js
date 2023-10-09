import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./View/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Country Information Lookup
        </p>
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>

      </header>
    </div>
  );
}

export default App;
