import "./Results.css";

export default function Results() {
  let apiKey = "1VktSjFyLglS8YtVcp0hZfEK42UrwyQf";
  let word = "hello";
  let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${word}&limit=25&offset=0&rating=g&lang=en`;

  console.log(apiUrl);
  return " Hello from results";
}
Results();
