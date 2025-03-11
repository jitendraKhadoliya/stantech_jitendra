import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div className="text-center mt-4">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
