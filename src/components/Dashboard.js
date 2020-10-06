// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const Dashboard = ({ setAuth }) => {
//   const [name, setName] = useState("");

//   const getProfile = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/dashboard/", {
//         method: "POST",
//         headers: { jwt_token: localStorage.token }
//       });

//       const parseData = await res.json();
//       setName(parseData.user_name);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const logout = async e => {
//     e.preventDefault();
//     try {
//       localStorage.removeItem("token");
//       setAuth(false);
//       toast.success("Logout successfully");
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getProfile();
//   }, []);

//   return (
//     <div>
//       <h1 className="mt-5">Dashboard</h1>
//       <h2>Welcome {name}</h2>
//       <button onClick={e => logout(e)} className="btn btn-primary">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Dashboard;
	import React,{Fragment, useEffect, useState} from "react";
	import {toast} from 'react-toastify';
	
	const Dashboard = ({setAuth}) => {
	
	    const [name, setName] = useState("");
	
	    async function getName() {
	        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
               method:"GET",
	                headers: { token: localStorage.token}
	            });
	
	            const parseRes = await response.json();
	            setName(parseRes.name);
	
	        } catch (err) {
	            console.error(err.message);
	        }
	    };
	
	    const logout = (e) => {
	        e.preventDefault()
	        localStorage.removeItem("token");
	        setAuth(false);
	        toast.success("Logged out successfully");
	    }
	
	    useEffect(() => {
	        getName();
	    },[]);
	
	    return (
	        <Fragment>
	            <h1>Dashboard {name}</h1>
	            <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
	            
	        </Fragment>
	    );
	};
	
	export default Dashboard;
