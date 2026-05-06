import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [quotes, setQuotes] = useState([]);

  // GET
  const fetchQuotes = () => {
    axios.get("http://localhost:5000/quotes")
      .then((res) => {
        setQuotes(res.data);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  // DELETE
  const deleteQuote = (id) => {

    axios.delete(`http://localhost:5000/quotes/${id}`)
      .then(() => {
        fetchQuotes();
      });

  };

  return (
    <div>

      <h1>Quotes</h1>

      {quotes.map((q) => (
        <div key={q.id}>

          <p>{q.text}</p>
          <h4>{q.author}</h4>

          <button onClick={() => deleteQuote(q.id)}>
            Delete
          </button>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;
