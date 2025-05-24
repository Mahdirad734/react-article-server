import Navbar from "../../components/navbar/Navbar";
import styled from "./notFoundPage.module.css";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styled.NotFoundWrapper}>
          <h1> صفحه یافت نشد خطای (404) </h1>
        </div>
      </div>
    </>
  );
}

export default NotFound;
