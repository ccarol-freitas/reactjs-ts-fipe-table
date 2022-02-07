import { Routes, Route } from "react-router-dom";

import Search from "./pages/Search";
import Result from "./pages/Result";
import { ProviderShowFields } from "./context/ContextShowFields";

const App = () => {
  return (
    <ProviderShowFields>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </ProviderShowFields>
  );
};

export default App;
