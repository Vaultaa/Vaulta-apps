import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header style={{ padding: "10px", background: "#0f172a", color: "#fff" }}>
          <h1>Vaulta</h1>
          <nav>
            <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>Home</Link>
            <Link to="/about" style={{ marginRight: "10px", color: "#fff" }}>About</Link>
            <Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<h2>Welcome to Vaulta 🚀</h2>} />
            <Route path="/about" element={<h2>About Vaulta</h2>} />
            <Route path="/dashboard" element={<h2>Dashboard (Coming Soon)</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
