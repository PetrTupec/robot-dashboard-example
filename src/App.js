import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard";

import SharedLayout from "./components/layout/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
