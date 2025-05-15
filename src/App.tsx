import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventListPage from "./pages/EventListPage";
import EventDetailsPage from "./pages/EventDetailsPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
      </Routes>
    </main>
  );
}

export default App;
