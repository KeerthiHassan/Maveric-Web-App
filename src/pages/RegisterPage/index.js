import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Endpoints from "../../api/Endpoints";
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";

const RegisterPage = () => {
  const [responseMessage, setResponseMessaage] = useState({
    message: "",
    cssClass: "",
  });

  const [errorMessage,setErrorMessage]=useState({
    firstNameError:'',
    emailError:'',
    mobileError:'',
    passwordError:''
  })

  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  function validate(){
    if(user.firstName=='')
    return false;
    
    else if(user.email=='')
    return false;
    else if(user.mobile=='')
    return false;
    else if (user.password=='')
    return false;
    return true;
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if(validate()){
    axios
      .post(Endpoints.REGISTER_URL, user)
      .then(
        (response) => {
          console.log(response.data);
          setResponseMessaage({
            message: response.data.message,
            cssClass: 'alert-success'
          });
        },
        (error) => {
          setResponseMessaage({
            message: error.response.data.message,
            cssClass: 'alert-danger'
          });
        }
      )
      .catch((error) => console.log(error));
  }


}

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div><Navbar />
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>Register</h2>
          <hr />

         {responseMessage.message && (
              <div class="alert alert-success" role="alert">
              { responseMessage.message }
            </div>
         )}

         <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="">UserName</label>
              <input
                type="text"
                name="UserName"
                value={user.UserName}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="Email"
                value={user.Email}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="Password"
                value={user.Password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                type="Password"
                name="RePassword"
                value={user.RePassword}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Signup"
              className="btn btn-primary btn-block"
            />
            <br />
            <p>
              <Link to="/">Already a member? Login Here</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
    <Footer />
    </div>
  );
};
export default RegisterPage;
