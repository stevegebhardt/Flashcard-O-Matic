import React from "react";
import { listDecks } from "../utils/api";

function Home() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    listDecks().then((data) => setDecks(data));
  }, []);
  return <div>Home Page</div>;
}

export default Home;
