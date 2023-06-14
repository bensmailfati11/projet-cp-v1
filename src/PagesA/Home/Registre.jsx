import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBFile
} from "mdb-react-ui-kit";
import "./Home.css";

function Registre() {
  return (
    <div id="Registre">
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="5">
            <MDBCard
              className="my-5 rounded-3"
              style={{ width: "600px", height: "750px" }}
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                className="w-100 rounded-top"
                alt="Sample photo"
              />

              <MDBCardBody className="px-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Registration Info
                </h3>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="FirstName"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="SecondName"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="datepicker mb-4"
                  label="email"
                  id="form2"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form3"
                  type="Password"
                />
                <MDBFile
                  label="Small file input example"
                  size="sm"
                  id="formFileSm"
                />
                {/* <MDBFile
                  label="Large file input example"
                  size="lg"
                  id="formFileLg"
                /> */}
                {/* 
              <MDBRow> */}
                {/* <MDBCol md='6'> */}
                {/* </MDBCol> */}
                {/* 
                <MDBCol md='6' > */}
                {/* <MDBSelect
                    data={[
                      { text: 'Gender', value: 1, disabled: true },
                      { text: 'Female', value: 2 },
                      { text: 'Male', value: 3 }
                    ]}
                    /> */}
                {/* </MDBCol>

              </MDBRow> */}

                {/* <MDBSelect
                className='mb-4'
                data={[
                  { text: 'Class', value: 1, disabled: true },
                  { text: 'Class 1', value: 2 },
                  { text: 'Class 2', value: 3 },
                  { text: 'Class 3', value: 3 }
                ]}
                /> */}

                {/* <MDBRow>
                  <MDBCol md="6"></MDBCol>
                </MDBRow> */}
                <MDBBtn id="btn" className="mb-4" size="lg">
                  Submit
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Registre;
