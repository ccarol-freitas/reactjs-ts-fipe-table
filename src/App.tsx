import { Routes, Route } from "react-router-dom";

import Search from "./pages/Search";
import Result from "./pages/Result";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
};

export default App;
