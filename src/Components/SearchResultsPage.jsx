import { useLocation } from "react-router-dom";

export default function SearchResultsPage() {
  const location = useLocation();
  const { results } = location.state;

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
