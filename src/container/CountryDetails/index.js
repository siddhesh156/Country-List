import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../../components/InputText";
import { updateCountry } from "../../Redux/CountryDetails/countryActions";

const CountryDetails = (props) => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countryDetails.countryData);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [selectedCountryData, setSelectedCountryData] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [countryName, setcountryName] = useState("");
  const [countryImage, setcountryImage] = useState("Choose File");
  const [countryImagePath, setcountryImagePath] = useState("");
  const [countryRank, setcountryRank] = useState("");
  const [countryContinent, setcountryContinent] = useState("");
  const [validated, setValidated] = useState(false);
  const [countryNameError, setcountryNameError] = useState(false);
  const [countryContinentError, setcountryContinentError] = useState(false);
  const [countryImagePathError, setcountryImagePathError] = useState(false);
  const [countryRankError, setcountryRankError] = useState(false);

  const handleCountryChange = (e) => {
    setSelectedCountryData(
      countryData.find((item) => item.id === e.target.value)
    );
    setSelectedCountryId(e.target.value);
  };

  const updateName = (e) => {
    let value = e.target.value;
    setcountryName(value);
  };
  const updateImage = (e) => {
    let value = e.target.files[0].name;
    var input = document.getElementById("inputGroupFile01");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function (event) {
      //var img = document.getElementById("country-img");
      //img.src = event.target.result;
      setcountryImagePath(event.target.result);
      //console.log('path', event.target.result);
    };
    setcountryImage(value);
  };
  const updateRank = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setcountryRank(value);
  };
  const updateContinet = (e) => {
    let value = e.target.value;
    setcountryContinent(value);
  };

  const AddCountry = (e) => {
    if (!(countryName.length > 3 && countryName.length < 20))
      return setcountryNameError(true);
    setcountryNameError(false);
    if (!(countryContinent !== "")) return setcountryContinentError(true);
    setcountryContinentError(false);
    if (!(countryImagePath !== "")) return setcountryImagePathError(true);
    setcountryImagePathError(false);
    if (!(countryRank !== "")) return setcountryRankError(true);
    setcountryRankError(false);
    
    let obj = {
      id: `${countryData.length + 1}`,
      name: countryName,
      continent: countryContinent,
      flag: countryImagePath,
      rank: countryRank,
    };
    dispatch(updateCountry(obj));
    setcountryName("")
    setcountryRank("")
    setcountryImage("")
    setcountryImagePath("")
    setcountryContinent("")
    setModalShow(false);
    //console.log({obj});

  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Country
          </Modal.Title>
        </Modal.Header>
        <Form
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Modal.Body>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Country Name"
                aria-label="Country Name"
                aria-describedby="basic-addon1"
                minLength="4"
                maxLength="20"
                value={countryName}
                isInvalid={countryNameError}
                onChange={(e) => {
                  updateName(e);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid country name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Control
                required
                as="select"
                placeholder="Select Country Continent"
                aria-label="Select Country Continent"
                value={countryContinent}
                isInvalid={countryContinentError}
                onChange={(e) => updateContinet(e)}
              >
                <option></option>
                <option>Oceania</option>
                <option>Europe</option>
                <option>Africa</option>
                <option>Asia</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a continent.
              </Form.Control.Feedback>
            </Form.Group>

            <input
              id="inputGroupFile01"
              accept="image/jpg"
              type="file"
              onChange={(e) => updateImage(e)}
              name="passport_proof_upload"
            />

            <label for="inputGroupFile01" className="d-f" id="file-drag">
              <div className="chooseTxt">{countryImage}</div>
            </label>

            <div
              className="invalid-feedback"
              style={{ display: countryImagePathError ? "block" : "none" }}
            >
              Please provide a valid country image.
            </div>

            <div className="d-f jc-sb">
              <div className="fileTxt">File Format : JPG / PNG </div>
              <div className="fileTxt">File Size: Less than 4 MB</div>
            </div>

            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Control
                placeholder="Country Rank"
                aria-label="Country Rank"
                aria-describedby="basic-addon1"
                required
                type="number"
                minLength="1"
                maxLength="2"
                value={countryRank}
                isInvalid={countryRankError}
                onChange={(e) => {
                  updateRank(e);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a rank.
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="btn btn-danger"
              onClick={AddCountry}
            >
              Add
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }

  return (
    <>
      <h1>Country</h1>
      <InputText
        dropdown
        value={selectedCountryId}
        list={countryData}
        onChange={handleCountryChange}
      />
      {selectedCountryData && (
        <div className="country-detail">
          <div>{selectedCountryData.name}</div>
          <div>
            <img alt={selectedCountryData.name} src={selectedCountryData.flag}></img>
          </div>
          <div>{selectedCountryData.rank}</div>
        </div>
      )}

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Country
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <style>{`
        .country-detail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};
export default CountryDetails;
