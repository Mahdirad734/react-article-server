import styled from "./inputArticleP.module.css"

function InputArticle(props) {
  return (
    <div className={styled.articleInput}>
      <label> {props.label} </label>
      <input name={props.name}  type="text" onChange={props.handleChange} />
    </div>
  );
}

export default InputArticle;
