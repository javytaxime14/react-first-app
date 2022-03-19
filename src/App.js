import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1 className="mb-4"> ☀️ Let's talk about weather! ☁️</h1>
      <SearchEngine />
        <p className="footer">
          <a href="https://github.com/javytaxime14/react-first-app">
          Open source project </a> by Javiera Hidalgo 
        </p>
    </div>
  );
}
