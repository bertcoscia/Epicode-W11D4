import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FetchComponent from "./components/FetchComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchComponent />} />
        <Route path="/article/:id" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
