import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
