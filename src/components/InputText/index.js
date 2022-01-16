import React from "react";
import "./InputText.css";
const InputText = (props) => {
  if (props.dropdown) {
    const optionList = props.list.map((item, i) => {
      return (
        <option key={item.id}
        disabled={i === 0 ? true : false} value={item.id}>
          {item.name}
        </option>
      );
    });
    return (
      <>
        <div className="user-input-wrp">
          <select
            className="inputText"
            onChange={props.onChange}
            name="countries"
            id={props.id}
            defaultValue=""
            required
          >
            {optionList}
          </select>
          <span className="floating-label">{props.title}</span>
        </div>
      </>
    );
  }
  
  return (
    <div className="user-input-wrp">
      <input
        type={props.type ? props.type : "text"}
        maxLength={props.limit ? 100 : null}
        className="inputText"
        value={props.value}
        onChange={props.onChange}
        required
      />
      <span className="floating-label">{props.title}</span>
    </div>
  );
};

export default InputText;