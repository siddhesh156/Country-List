import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Button,
  Modal,
  InputGroup,
  FormControl,
  Form,
  FormGroup,
  FormFile,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../../components/InputText";
import { updateCountry } from "../../Redux/AccountDetails/accountActions";

const CountryDetails = (props) => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.accountDetails.countryData);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [selectedCountryData, setSelectedCountryData] = useState();
  const [modalShow, setModalShow] = useState(true);
  const [countryName, setcountryName] = useState("");
  const [countryImage, setcountryImage] = useState("");
  const [countryImagePath, setcountryImagePath] = useState("");
  const [countryRank, setcountryRank] = useState("");
  const [countryContinent, setcountryContinent] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountryData(
      countryData.find((item) => item.id === e.target.value)
    );
    setSelectedCountryId(e.target.value);
  };

  //   console.log({ selectedCountryData });

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
    let obj = {
      id: `${countryData.length + 1}`,
      name: countryName,
      continent: countryContinent,
      flag: countryImagePath,
      rank: countryRank,
    };
    dispatch(updateCountry(obj));
    setModalShow(false);
    //console.log({obj});
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
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              required
              placeholder="Country Name"
              aria-label="Country Name"
              aria-describedby="basic-addon1"
              minLength="3"
              maxLength="20"
              value={countryName}
              onChange={(e) => {
                updateName(e);
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              required
              as="select"
              custom
              value={countryContinent}
              onChange={(e) => updateContinet(e)}
            >
              <option></option>
              <option>Oceania</option>
              <option>Europe</option>
              <option>Africa</option>
              <option>Asia</option>
            </FormControl>
          </InputGroup>
          <InputGroup className="mb-5">
            <Form.Group>
              <Form.File
                type="file"
                className="custom-file-label"
                id="inputGroupFile01"
                label={countryImage}
                onChange={(e) => updateImage(e)}
                custom
              />
            </Form.Group>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Country Rank"
              aria-label="Country Rank"
              aria-describedby="basic-addon1"
              required
              type="number"
              minLength="1"
              maxLength="2"
              value={countryRank}
              onChange={(e) => {
                updateRank(e);
              }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={AddCountry}>
            Add
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
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
          {/* <div><img src={require(selectedCountryData.flag).default}></img></div> */}
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

      {/* <img id="country-img"></img> */}

      <style jsx>{`
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
