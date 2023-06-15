import React,{ useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
  }


  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' >
      <MDBRow>
        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'onSubmit={handleSubmit}>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'				name="email"
							onChange={handleChange}
							value={data.email}
							required/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
              {error && <div >{error}</div>}
              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
  }


export default Login