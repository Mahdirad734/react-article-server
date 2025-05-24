import styled from "./textarea.module.css";

function Textarea(props) {
  return (
    <>
      <div className={styled.Textarea}>
        <label > {props.label} </label>
        <textarea name={props.name} onChange={props.handleChangeT} ></textarea>
      </div>
    </>
  );
}

export default Textarea;