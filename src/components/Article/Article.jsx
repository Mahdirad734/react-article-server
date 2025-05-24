import styled from "./article.module.css"
// import articlePic from "../../assets/img/javascript.png"
function Article(props) {
  
  return(
    <div className={styled.ArticleWrapper}>
      <img src={props.data.imageUrl} alt="تصویر مقاله" />
      <div>
        <h3>{props.data.title} </h3>
        <p> مدت زمان خواندن مقاله {props.data.readingTime} دقیقه </p>
        <p></p>
      </div>
    </div>
  )
}

export default Article;
