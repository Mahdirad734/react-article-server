import styled from "./articlePage.module.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

function Articles() {
  const { id } = useParams();
  const [ArticleData, setArticleData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log({id})
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://6834161c464b499636013e01.mockapi.io/articles/${id}`)
      .then((response) => {
        setArticleData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  // console.log(ArticleData.date);

  return (
    //fregment <>
    <>
      <Navbar />
      <div className="container">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styled.articleWrapper}>
            <h1>{ArticleData.title}</h1>
            <div className={styled.articleInfo}>
              <span>تاریخ: {ArticleData.date}</span>
              <span>نویسنده: {ArticleData.author} </span>
              <span> مدت زمان خواندن : {ArticleData.readingTime} </span>
            </div>
            <div className={styled.articlePicCon}>
              <img src={ArticleData.imageUrl} alt="تصویر مقاله" />
            </div>
            <p>{ArticleData.content}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
export default Articles;
