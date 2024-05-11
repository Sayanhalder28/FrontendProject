import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import GetProjectForm from "./pages/GetProjectForm";
import PageNotFound from "./pages/PageNotFound";
import SuccesssPage from "./pages/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/get-project" element={<GetProjectForm />} />
          <Route path="/success" element={<SuccesssPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
