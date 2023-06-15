import React,{useState} from "react";
import axios from "axios";
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
// import { Input } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'

function Registre() {
  const[data,setData] =useState({
    firstName:"",
    lastName:"",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlechange = ({currentTarget:MDBInput})=>{
    setData({...data,[MDBInput.name]:MDBInput.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const url ="http://localhost:8082/api/users";
      const{data:res} = await axios.post(url,data);
      navigate("/login")
      console.log(res.message)
    } catch (error) {
      if(error.response&&
        error.response.status>=400&&
        error.response.status <= 500)
        {
          setError(error.response.data.message);
        }
    }
  }
  return (
    <div id="Registre">
      <MDBContainer fluid  onSubmit={handleSubmit}> 
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
                      label="firstName"
                      onChange={handlechange}
                      id="form1"
                      type="text"
                      name="firstName"
                      value={data.firstName}
                      required
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="lastName"
                      id="form1"
                      onChange={handlechange}
                      type="text"
                      name="lastName"
                      value={data.lastName}
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="datepicker mb-4"
                  label="email"
                  id="form2"
                  onChange={handlechange}
                  type="email"
                  name="email"
                  value={data.email}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form3"
                  onChange={handlechange}
                  type="password"
                  name="password"
                  value={data.password}
                  required
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
                {error && <div >{error}</div>}
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
