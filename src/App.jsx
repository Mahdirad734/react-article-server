import "./index.css";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";
import ArticlePage from "./pages/articlePage/ArticlePage.jsx";
import ArticleP from "./pages/articleP/ArticleP.jsx";
import { Route, Routes } from "react-router";
import NotFound from "./pages/notFoundPage/NotFoundPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/articleP" element={<ArticleP />} />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </div>
  );
}

export default App;
