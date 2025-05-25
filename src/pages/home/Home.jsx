import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/Article/Article.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import styled from "./home.module.css";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from "react-router";
import Spinner from "../../components/spinner/Spinner.jsx";

function Home() {
  const [articles, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // API call after loading site

    setIsLoading(true);
    axios
      .get("https://react-article-server.vercel.app/api/articles")
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar />
      <div className="container">
        <h2> مقالات </h2>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styled.Articles}>
            {articles.map((value) => (
              <Link key={value.id} to={`/api/article/${value.id}`}>
                <Article data={value} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
