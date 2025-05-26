import { useState } from "react";
import styled from "./articleP.module.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import InputArticle from "../../components/input/InputArticleP.jsx";
import Textarea from "../../components/textarea/Textarea.jsx";
import axios from "axios";

function ArticleP() {
  const [inputValue, setInputValue] = useState({
    id: "",
    title: "",
    date: "",
    readingTime: "",
    author: "",
    imageURL: "",
    message: "",
  });
  function handleArticleValue(event) {
    setInputValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

    // function handleArticleValue(event) {
    //   switch (event.target.name) {
    //     case "title":
    //       //   !!!نوشتن بدنه فانکشن درون پرانتز باعث میشود که خود فانکشن ریترن کند
    //       // در فانکشن پایین هم مقدار قبلی هم مقدار جدید ریترن میشود
    //       setInputValue((prevState) => ({
    //         ...prevState,
    //         title: event.target.value,
    //       }));

    //       break;
    //     case "date":
    //       setInputValue((prevState) => ({
    //         ...prevState,
    //         date: event.target.value,
    //       }));

    //       break;

    //     default:
    //       console.log("errorNameType");
    //       break;
    //   }
    // }
  }
  // به دلیل اینکه نوع اطلاعات در تکست آریا با اینپوت ها تفاوت داشت ، یک فانکشن جداگانه برای گرفتن مقدار آن تعریف کردیم
  function handleArticleTextarea(event) {
    setInputValue((prevState) => ({
      ...prevState,
      message: event.target.value,
    }));
  }
  // ارسال مقاله به سرور با توجه به کیی هایی که در آبجکت سرور هست باید دیتا ارسال کنیم
  function handleCreateArticle() {
    axios.post("https://6834161c464b499636013e01.mockapi.io/articles", {
      id: inputValue.numberArticle,
      title: inputValue.title,
      readingTime: inputValue.readingTime,
      date: inputValue.date,
      author: inputValue.author,
      imageUrl: inputValue.imageURL,
      content: inputValue.message,
    });
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styled.inputWrapper}>
          <InputArticle
            name="title"
            label=":عنوان مقاله جدید"
            handleChange={handleArticleValue}
          />

          <InputArticle
            name="date"
            label=":تاریخ"
            handleChange={handleArticleValue}
          />
          <InputArticle
            name="numberArticle"
            label=":شماره مقاله"
            handleChange={handleArticleValue}
          />
          <InputArticle
            name="readingTime"
            label=": زمان خواندن مقاله"
            handleChange={handleArticleValue}
          />
          <InputArticle
            name="author"
            label=": نویسنده"
            handleChange={handleArticleValue}
          />
          <InputArticle
            name="imageURL"
            label=":لینک تصویر مقاله "
            handleChange={handleArticleValue}
          />
          <Textarea
            label=":متن مقاله"
            name="textarea"
            handleChangeT={handleArticleTextarea}
          />

          <button onClick={handleCreateArticle}>ساخت مقاله </button>
        </div>
      </div>
    </>
  );
}

export default ArticleP;
