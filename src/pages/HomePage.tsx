import { Link } from "react-router-dom";
import GreetingMessage from "./components/GreetingMessage";

function HomePage() {
  return (
    <>
      <GreetingMessage />
      <Link to="/events">Create and manage events</Link>
    </>
  );
}

export default HomePage;
