import { Link } from "react-router-dom";
import GreetingMessage from "./components/GreetingMessage";

function HomePage() {
  return (
    <main>
      <GreetingMessage />
      <Link to="/events">Create and manage events</Link>
    </main>
  );
}

export default HomePage;
