import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventListPage from "./pages/EventListPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import ParticipantJoinEventLandingPage from "./pages/ParticipantJoinEventLandingPage";
import { Authenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";

function My404Component() {
  useEffect(() => {
    console.error("Route not found: ", window.location.href);
  }, []);
  return <div>Page Not found</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/events"
        element={
          <Authenticator>
            <EventListPage />
          </Authenticator>
        }
      />
      <Route
        path="/events/:eventId"
        element={
          <Authenticator>
            <EventDetailsPage />
          </Authenticator>
        }
      />

      <Route
        path="/join-event/:eventId"
        element={<ParticipantJoinEventLandingPage />}
      />

      <Route path="*" element={<My404Component />} />
    </Routes>
  );
}

export default App;
