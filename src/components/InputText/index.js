import React from "react";
import "./InputText.css";
import upload from "../../images/upload.svg";
const InputText = (props) => {
  //console.log(props);
  if (props.dropdown) {
    const optionList = props.list.map((item, i) => {
      return (
        <option key={item.id}
        disabled={i == 0 ? true : false} value={item.id}>
          {item.name}
        </option>
      );
    });
    return (
      <>
        <div className="user-input-wrp">
          <select
            className="inputText"
            // onChange={(e) => //console.log(e.target.value)}
            onChange={props.onChange}
            name="countries"
            id={props.id}
            defaultValue=""
            required
          >
            {optionList}
          </select>
          <span class="floating-label">{props.title}</span>
        </div>
      </>
    );
  }
  if (props.chooseFile) {
    return (
      <>
        <input
          id={props.id}
          accept="image/jpg ,application/pdf,.doc,.docx"
          type="file"
          onChange={props.onChange}
          name="passport_proof_upload"
        />
        {props.text ? (
          <label
            style={{ border: "none" }}
            for={props.id}
            className="d-f"
            id="file-drag"
          >
            <img src={upload} class="img-fluid" />
            <div class="chooseTxt">Choose File</div>
          </label>
        ) : (
          <label for={props.id} className="d-f" id="file-drag">
            <img src={upload} class="img-fluid" />
            <div class="chooseTxt">Choose File</div>
          </label>
        )}

        {props.text ? null : (
          <div className="d-f jc-sb">
            <div className="fileTxt">File Format : JPG / PDF / DOC</div>
            <div className="fileTxt">File Size: Less than 2 MB</div>
          </div>
        )}
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