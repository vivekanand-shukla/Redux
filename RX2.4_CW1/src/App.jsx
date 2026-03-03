import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Savings from "./pages/Savings";
import NewEntry from "./pages/NewEntry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="income" element={<Income />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="savings" element={<Savings />} />
          <Route path="new-entry" element={<NewEntry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;