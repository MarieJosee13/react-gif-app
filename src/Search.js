import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" className="gif-search"></input>
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}
