// import React, { Fragment, useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { toast } from "react-toastify";

// const Register = ({ setAuth }) => {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//     name: ""
//   });

//   const { email, password, name } = inputs;

//   const onChange = e =>
//     setInputs({ ...inputs, [e.target.name]: e.target.value });

//   const onSubmitForm = async e => {
//     e.preventDefault();
//     try {
//       const body = { email, password, name };
//       const response = await fetch(
//         "http://localhost:5000/authentication/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-type": "application/json"
//           },
//           body: JSON.stringify(body)
//         }
//       );
//       const parseRes = await response.json();

//       if (parseRes.jwtToken) {
//         localStorage.setItem("token", parseRes.jwtToken);
//         setAuth(true);
//         toast.success("Register Successfully");
//       } else {
//         setAuth(false);
//         toast.error(parseRes);
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <Fragment>
//       <h1 className="mt-5 text-center">Register</h1>
//       <form onSubmit={onSubmitForm}>
//         <input
//           type="text"
//           name="email"
//           value={email}
//           placeholder="email"
//           onChange={e => onChange(e)}
//           className="form-control my-3"
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           placeholder="password"
//           onChange={e => onChange(e)}
//           className="form-control my-3"
//         />
//         <input
//           type="text"
//           name="name"
//           value={name}
//           placeholder="name"
//           onChange={e => onChange(e)}
//           className="form-control my-3"
//         />
//         <button className="btn btn-success btn-block">Submit</button>
//       </form>
//       <Link to="/login">login</Link>
//     </Fragment>
//   );
// };

// export default Register;
import React,{Fragment, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from 'react-toastify';
import { Form, Col, Row, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = ({setAuth}) => {
    const [inputs, setInputs] = useState({
	        email: "",
	        password: "",
	        name: ""
	    })
	    const {email, password, name} = inputs;
	
	    const onChange = (e) => {
	        setInputs({...inputs, [e.target.name]: e.target.value});
	    };
	
	    const onSubmitForm = async (e) => {
	        e.preventDefault()
	        try {
	
	            const body = {email, password, name}
	
	            const response = await fetch(
	              "http://localhost:5000/auth/register",
	              {
	                method: "POST",
	                headers: { "Content-Type": "application/json" },
	                body: JSON.stringify(body),
	              }
	            );
	            const parseRes = await response.json()
	            if(parseRes.token){
	              localStorage.setItem("token", parseRes.token);
	              setAuth(true);
	              toast.success("Registered successfully");
	            }else{
	              setAuth(false);
	              toast.error(parseRes);
	            }
	            
	
	            
	
	            
	        } catch (err) {
	            console.log(err.message)
	        }
		};
		function changepage(){
			window.location.href="/";
		}
	
	    return (
			
			<div class="pat">
			<Form onSubmit={onSubmitForm}>
			 <Form.Group>
			   <Form.Label>
				 <h1>User Registration Form</h1>
			  </Form.Label>
			</Form.Group> 
		  <Form.Row>
		  <Form.Group  as={Col} controlId="formGridFirstName">
			<Form.Label>First Name</Form.Label>
			<Form.Control type="text" placeholder="First Name" />
		  </Form.Group>
		  <Form.Group as={Col} controlId="formGridMiddleName">
			<Form.Label>Middle Name</Form.Label>
			<Form.Control type="text" placeholder="Middle Name" />
		  </Form.Group>
		  <Form.Group as={Col} controlId="formGridLastName">
			<Form.Label>Last Name</Form.Label>
			<Form.Control type="text" placeholder="Last Name" />
		  </Form.Group>
	  
		  </Form.Row>
		  
		<Form.Row>
		<Form.Group as={Col} controlId="formGridDOB">
		  <Form.Label>Date of birth</Form.Label>
		  <Form.Control placeholder="DD/MM/YYYY" />
		</Form.Group>
		  
		<Form.Group as={Col} controlId="formGridBloodgroup">
			<Form.Label>Blood Group</Form.Label>
			<Form.Control as="select" defaultValue="Choose">
			  <option>A+</option>
			  <option>A-</option>
			  <option>B+</option>
			  <option>B-</option>
			  <option>AB+</option>
			  <option>AB-</option>
			  <option>O+</option>
			  <option>O-</option>
			</Form.Control>
		  </Form.Group>
		  <Form.Group as={Col} controlId="formGridgender">
			<Form.Label>Gender</Form.Label>
			<Form.Control as="select" defaultValue="Choose">
			  <option>M</option>
			  <option>F</option>
			  <option>O</option>
			</Form.Control>
		  </Form.Group>
		</Form.Row>
		<Form.Row>
		<Form.Group  as={Col} controlId="formGridShousenumber">
		  <Form.Label>House number</Form.Label>
		  <Form.Control placeholder="343" />
		</Form.Group>
		<Form.Group as={Col} controlId="formGridStreet">
		  <Form.Label>Street</Form.Label>
		  <Form.Control placeholder="1234 Main St" />
		</Form.Group>
		</Form.Row>
	  
		<Form.Row>
		<Form.Group  as={Col} controlId="formGridCity">
		  <Form.Label>City</Form.Label>
		  <Form.Control placeholder="New Delhi" />
		</Form.Group>
		<Form.Group as={Col} controlId="formGridState">
		  <Form.Label>State</Form.Label>
		  <Form.Control placeholder="Delhi" />
		</Form.Group>
		<Form.Group as={Col} controlId="formGridPincode">
		  <Form.Label>Pincode</Form.Label>
		  <Form.Control placeholder="110045" />
		</Form.Group>
		</Form.Row>
		
		<Form.Row>
		<Form.Group as={Col} controlId="formGridMobilePhone">
			<Form.Label>Mobile Number</Form.Label>
			<Form.Control type="number"/>
		  </Form.Group>
		  <Form.Group as={Col} controlId="formGridPhone">
			<Form.Label>Phone Number</Form.Label>
			<Form.Control type="number"/>
		  </Form.Group>
		 
	  
		</Form.Row>
	  
		<Form.Row>
		<Form.Group as={Col} controlId="formGridUsername">
		  <Form.Label>Username</Form.Label>
		  <Form.Control value={email} name="email" onChange={e => onChange(e)} placeholder="rashbari12" />
		</Form.Group>
		  
		<Form.Group as={Col} controlId="formGridPassword">
		  <Form.Label>Password</Form.Label>
		  <Form.Control type="password" value={password} name="password" onChange={e => onChange(e)} placeholder="mo@ba@la*la(la)" />
		</Form.Group>
	  
		</Form.Row>
	  
		<Form.Group id="formGridCheckbox">
		  <Form.Check type="checkbox" label="Everything mentioned by me is correct" />
		</Form.Group>
	  
		<Form.Row>
			<Form.Group as={Col}>
			  <Button  block bsSize="large" type="submit">
				Register
				</Button>	
			</Form.Group>
			<Form.Group as={Col}>
			<Button block bsSize="large" onClick={changepage}>
				Cancel
			</Button>
		  </Form.Group>
		</Form.Row>
	  </Form>
		  </div>
		  
			
	    );
	};

	//   <Fragment>
	    //     <h1 className="text-center my-5">Register</h1>
	    //     <form onSubmit={onSubmitForm}>
	    //       <input
	    //         type="email"
	    //         name="email"
	    //         placeholder="email"
	    //         className="form-control my-3"
	    //         value={email}
	    //         onChange={e => onChange(e)}
	    //       />
	    //       <input
	    //         type="password"
	    //         name="password"
	    //         placeholder="password"
	    //         className="form-control my-3"
	    //         value={password}
	    //         onChange={e => onChange(e)}
	    //       />
	    //       <input
	    //         type="text"
	    //         name="name"
	    //         placeholder="name"
	    //         className="form-control my-3"
	    //         value={name}
	    //         onChange={e => onChange(e)}
	    //       />
	    //       <button className="btn btn-success btn-block">Submit</button>
	    //     </form>
	    //     <Link to="/login">Login</Link>
	    //   </Fragment>
	
	export default Register;

