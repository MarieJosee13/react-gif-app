import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search a GIF!</h1>
        <p>search a GIF and send it to your friends!</p>
      </header>
      <Search />
    </div>
  );
}

App();
